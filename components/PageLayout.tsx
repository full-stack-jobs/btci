import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import NavigationBar from "./website/NavigationBar";
import HeaderArea from "./website/HeaderArea";
import FooterArea from "./website/FooterArea";
import Script from "next/script";
import { Props } from "../interfaces";
import CopyRight from "./website/CopyRight";

function PageLayout({ children }: Props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderArea />
      <NavigationBar />
      {children}
      <FooterArea />
      <CopyRight />
      <Script src="/assets/js/jquery-3.5.1.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/popper.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/form-validator.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/contact-form-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.meanmenu.js" strategy="lazyOnload" />
      <Script src="/assets/js/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/odometer.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.appear.min.js" strategy="lazyOnload" />
      <Script
        src="/assets/js/jquery.nice-select.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/jquery.magnific-popup.min.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
    </>
  );
}

export default PageLayout;
