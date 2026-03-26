# PIXEL-PERFECT STANDARDS

- **No Guessing:** ALWAYS use `get_design_context` from Figma before coding.
- **Tailwind Precision:** Use arbitrary values like `p-[13px]` if Figma says 13px. Do not round to `p-3` or `p-4`.
- **Shadcn First:** If a component exists in Figma (Button, Input), check if it's in `@/components/ui`. If not, use the Shadcn MCP to install it first.
- **Color Variables:** Map Figma colors to `globals.css` variables. Use `text-primary` or `bg-background` where possible.
- **Typography:** Match `line-height`, `letter-spacing`, and `font-weight` exactly from Figma CSS.
