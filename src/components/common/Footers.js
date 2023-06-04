"use client";

import { P1, P2, P4 } from "../text/Paragraphs";

export function HomepageFooter() {
  return (
    <div className="grid grid-cols-2 p-2 border-t-2 border-solid border-white">
      <div className="flex items-center justify-center">
        <P2>Grow with MVP</P2>
        <P2>Unlcok the full MVP potential - link to custom plan</P2>
      </div>
      <div className="grid w-full h-full grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <P2>Company</P2>
          <P4>Blog</P4>
          <P4>Careers</P4>
          <P4>Blog</P4>
        </div>
        <div className="flex flex-col items-center justify-center">
          <P2>Docs</P2>
          <P4>Documentation</P4>
          <P4>Code of Conduct</P4>
          <P4>Terms of Service</P4>
          <P4>Privacy Policy</P4>
        </div>
        <div className="flex flex-col items-center justify-center">
          <P2>Connect</P2>
          <P4>Twitter</P4>
          <P4>Discord</P4>
        </div>
      </div>
    </div>
  );
}
