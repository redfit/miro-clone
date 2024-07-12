import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  // Validators for arguments.
  args: {
    orgId: v.string(),
  },

  handler: async (ctx, args) => {
    const identify = await ctx.auth.getUserIdentity();

    if (!identify) throw new Error("Unauthorized");

    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
      .order("desc")
      .collect();

    return boards;
  },
});

export const update = mutation({
  args: { id: v.id("boards"), title: v.string() },
  handler: async (ctx, args) => {
    const identify = await ctx.auth.getUserIdentity();

    if (!identify) throw new Error("Unauthorized");

    const title = args.title.trim();

    if (!title) {
      throw new Error("Title is required");
    }

    if (title.length > 60) {
      throw new Error("Title cannot be longer than 60 characters");
    }

    const board = await ctx.db.patch(args.id, {
      title: args.title,
    });

    return board;
  },
});
