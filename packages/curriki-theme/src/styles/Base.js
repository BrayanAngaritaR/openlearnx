import React from "react";
import { Global, css } from "frontity";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import custom from "./Custom"

//https://gitbook-docs.frontity.org/guides/processing-page-builder-content

const Base = () => {
   return (
    <Global styles={css([bootstrap, custom])} />
      // <Global
      //    styles = { css`
      //       @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Rubik:wght@500&display=swap');
      //       html{
      //          font-family: 'Open Sans', sans-serif;
      //          font-family: 'Rubik', sans-serif;
      //       }
      //       a{
      //          text-decoration: none;
      //          margin-left:5px;
      //          margin-right:5px;
      //       }

      //       .wp-block-columns {
      //          display: flex;
      //          margin-bottom: 28px;
      //          flex-wrap: wrap; }
      //          @media (min-width: 782px) {
      //            .wp-block-columns {
      //              flex-wrap: nowrap; } }
      //          .wp-block-columns.has-background {
      //            padding: 20px 30px; }
                 
      //            .wp-block-column {
      //          flex-grow: 1;
      //          min-width: 0;
      //          word-break: break-word;
      //          overflow-wrap: break-word; }
      //          @media (min-width: 1282px) {
      //            .wp-block-column {
      //              padding: 25px;
      //              flex-basis: 0;
      //              flex-grow: 1; }
      //              .wp-block-column[style] {
      //                flex-grow: 0; }
      //              .wp-block-column:not(:first-child) {
      //                margin-right: 32px; } }
                 
      //            /**
      //             * All Columns Alignment
      //             */
      //            .wp-block-columns.are-vertically-aligned-top {
      //          align-items: flex-start; }
                 
      //            .wp-block-columns.are-vertically-aligned-center {
      //          align-items: center; }
                 
      //            .wp-block-columns.are-vertically-aligned-bottom {
      //          align-items: flex-end; }
                 
      //            /**
      //             * Individual Column Alignment
      //             */
      //            .wp-block-column.is-vertically-aligned-top {
      //          align-self: flex-start; }
                 
      //            .wp-block-column.is-vertically-aligned-center {
      //          -ms-grid-row-align: center;
      //              align-self: center; }
                 
      //            .wp-block-column.is-vertically-aligned-bottom {
      //          align-self: flex-end; }
                 
      //            .wp-block-column.is-vertically-aligned-top, .wp-block-column.is-vertically-aligned-center, .wp-block-column.is-vertically-aligned-bottom {
      //          width: 100%; }


      //          .hero-section {
      //           width: 100%;
      //           @media screen and (max-width: 768px) {
      //             height: auto;
      //           }
      //         }
      //    `}
      // />
   );
}

export default Base