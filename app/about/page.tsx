import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Next-js practice project',
    template: "%s | next js",
    absolute:'it is the next js'
  },
  description: "Learn more about our company and team on the About Us page of our Next.js application.",
};

import TestPageDesign from "../components/TestPageDesign"
export default function About() {
    return (
      <>
        <TestPageDesign
          heading="About Page"
          subject="Company Information"
          body="This is the about page of the Next.js application."
        >
          <div className="mt-5 text-black">
            <p>
              this line is added to test the layout of the about page. It should be displayed below the body text and above the closing div tag of the TestPageDesign component.
            </p>
          </div>
        </TestPageDesign>
      </>
    );
}