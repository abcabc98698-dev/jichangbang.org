import fs from 'fs';

let content = fs.readFileSync('src/components/ui/Button.astro', 'utf8');

content = content.replace(
  'size?: "xs" | "sm" | "md" | "lg" | "xl"; // Button size, optional, default is "md"',
  'size?: "xs" | "sm" | "md" | "lg" | "xl"; // Button size, optional, default is "md"\n\trel?: string;'
);

content = content.replace(
  'const { url, type = "solid", className = "", target = "_self", size = "md" } = Astro.props;',
  'const { url, type = "solid", className = "", target = "_self", rel, size = "md" } = Astro.props;\n\tconst computedRel = rel || (target === "_blank" ? "nofollow sponsored noopener" : undefined);'
);

content = content.replace(
  'target={type === "disabled" ? undefined : target}',
  'target={type === "disabled" ? undefined : target}\n  rel={type === "disabled" ? undefined : computedRel}'
);

fs.writeFileSync('src/components/ui/Button.astro', content, 'utf8');
console.log('Successfully updated Button.astro with automated rel attribute');
