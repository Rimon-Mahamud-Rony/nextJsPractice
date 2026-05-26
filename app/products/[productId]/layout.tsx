import CommonPageDesign from "@/app/components/CommonPageDesign";
import React from "react";
import { ReactNode } from "react";
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <CommonPageDesign>
        <div className="flex min-h-[90vh] items-center justify-center p-4">
          <section className="w-full sm:w-3/4 rounded-xl border border-slate-400 bg-white shadow-sm p-5">
            {/* Top Content Header */}
            <div className="border-b border-slate-100 bg-linear-to-r from-cyan-50 to-slate-50 px-5 py-5 sm:px-6">
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-600">
                Product Details
              </p>

              <h1 className="mt-1 text-2xl font-bold text-slate-800">
                Detailed Product Information
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                View complete product specifications, descriptions, pricing,
                availability, and additional information.
              </p>
            </div>

            {/* Product Body */}
            <div className="p-4 sm:p-6 lg:p-8">{children}</div>

            {/* Bottom Summary */}
            <div className="grid gap-4 border-t border-slate-100 bg-slate-50 p-4 sm:grid-cols-3 sm:p-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-700">
                  Premium Quality
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Carefully verified and high-quality products.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-700">
                  Secure Checkout
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Safe and trusted payment experience.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-700">
                  Fast Support
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Quick customer assistance whenever needed.
                </p>
              </div>
            </div>
          </section>
        </div>
      </CommonPageDesign>
    );
}