import { TextLayer } from "@/types/canvas";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { Poppins } from "next/font/google";
import { cn, colorToCss } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.5;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;

  return {
    fontSizeBasedOnHeight,
    fontSizeBasedOnWidth,
    maxFontSize,
  };
};

interface TextProps {
  id: string;
  layer: TextLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Text = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: TextProps) => {
  const { x, y, width, height, value, fill } = layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");
    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        fontSize: calculateFontSize(width, height),
        outline: selectionColor ? `1px solit ${selectionColor}` : "none",
      }}
    >
      <ContentEditable
        className={cn(
          "h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none",
          font.className,
        )}
        style={{ color: fill ? colorToCss(fill) : "#000" }}
        html={value || "Text"}
        onChange={handleContentChange}
      />
    </foreignObject>
  );
};
