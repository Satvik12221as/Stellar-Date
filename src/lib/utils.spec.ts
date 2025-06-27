import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("should handle conditional classes", () => {
    expect(cn("px-2", false && "py-1", "text-sm")).toBe("px-2 text-sm");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["px-2", "py-1"], "text-sm")).toBe("px-2 py-1 text-sm");
  });

  it("should handle objects with boolean values", () => {
    expect(cn("px-2", { "py-1": true, "text-lg": false })).toBe("px-2 py-1");
  });

  it("should merge conflicting Tailwind classes correctly", () => {
    expect(cn("px-2 py-1", "px-4 py-2")).toBe("px-4 py-2");
  });

  it("should handle undefined and null values", () => {
    expect(cn("px-2", undefined, null, "py-1")).toBe("px-2 py-1");
  });
});
