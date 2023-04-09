import { MjmlHead, MjmlPreview, MjmlTitle } from "@faire/mjml-react";

export interface EmailHeadProps {
  title: string;
  preview?: string;
}

export function Head({ title, preview }: EmailHeadProps) {
  return (
    <MjmlHead>
      <MjmlTitle>{title}</MjmlTitle>
      <MjmlPreview>{preview ?? title}</MjmlPreview>
    </MjmlHead>
  );
}
