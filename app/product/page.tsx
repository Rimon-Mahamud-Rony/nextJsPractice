import TestPageDesign from "../components/TestPageDesign"
export default function Product() {
  return (

    <TestPageDesign
      heading="Product Page"
      subject="Our Products"
      body="This is the product page of the Next.js application. You can add more content here to display information about your products."
    >
      <div className="mt-5 text-black">
        <p>
          This is the product page of the Next.js application. You can add more content here to display information about your products.
        </p>
      </div>
    </TestPageDesign>
    
  );
}
