const GlobalStyle = `
h2 > .font-theme-color-primary{
	color: purple;
}

span > .font-theme-color-secondary{
	color: grey;
}

.text-decoration-underline{
	text-decoration: underline;
}

.modal.fade{
	background: rgb(0 0 0 / 90%);
}

.modal-blue-header{
	background: #2056a1;
	padding-left: 40px;
}

.border-rounded-bottom-25{
	border-bottom-left-radius: 25px;
	border-bottom-right-radius: 25px;
}

.border-rounded-top-25{
	border-top-right-radius: 25px;
	border-top-left-radius: 25px;
}

.modal-studio-title > h2{
	font-weight: 700;
  color: #f8af2c;
  font-size: 36px;
}

ul.list-circle>li{
	list-style-type: circle !important;
}

.padding-left-25{
	padding-left: 25px !important;
}

/* Custom styles template for Curriki  */

/* ===========================
         Blog
=========================== */

.entry-wrapper{
   display:  grid;
   grid-gap: 20px;
   grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
}

.archive-title{
   font-size: 50px;
   text-transform: uppercase;
   text-align: center;
}

.blog .pagination{
   margin-top: 0px;
}

@media only screen and (min-width:  960px) {
   .blog .entry-header{
      margin-left: 0;
      margin-right: 0;
   }
}




/*Custom styles*/


/*Homepage*/

.bg-home{
	background-size: initial;
    background-position: top center;
    background-image: url(https://www.curriki.org/wp-content/uploads/2021/05/bg-home-hero.svg)!important;
}
.secondary-line{
    border-radius: 10px;
    border: 3px solid #f8af2c;
		margin-top: 15px;
	  width: 70%;
    margin-left: 15%;
}

.bg-contact-us{
	background-size: initial;
    background-position: top center;
    background-image: url(https://dev-currikiorg.pantheonsite.io/wp-content/uploads/2021/09/Hero-background.png)!important;
}

.bg-breadcrumbs{
	background-image: url(http://www.curriki.org/wp-content/uploads/2021/04/bg-header-breadcrumbs-m.svg), linear-gradient(90deg, rgb(8, 72, 146) 30.14%, rgb(40, 90, 165) 94.74%) !important;
	background-repeat: no-repeat;
}

/* Fonts, text and colors */
.font-theme-primary{
	font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif !important;
}

.font-theme-secondary{
	font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
	font-weight: lighter;
}

.font-theme-secondary{
	font-family: 'Open Sans', sans-serif;
}

.font-theme-color-primary{
	color: #084892;
}

.font-theme-color-secondary{
	color: #f8af2c;
}

.font-blue-secondary{
	color: #3a6da8;
}

.text-white{
	color: #fff;
}

.font-bold{
	font-weight: 600;
}

.entry-content h4, .font-light{
	font-weight: 100;
} 

.big-title{
	line-height: 1.2em;
	font-size: 49px;
	font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif !important;
	font-weight: 600;
}

.font-size-25{
	line-height: 25px;
	font-size: 25px;
}

.counter-title{
	font-size: 66px;
	line-height: 66px;
}

.font-medium{
	font-size: 25px;
	line-height: 25px;
}

.font-32{
	font-size: 32px;
	line-height: 32px;
}

.font-36{
	font-size: 36px;
	line-height: 36px;
}

.font-49{
	font-size: 49px;
	line-height: 49px;
}

.try-currikistudio-now-title{
	font-size: 32px;
	font-weight: 600;
}

.try-currikistudio-now-description{
	font-size: 16px;
	font-weight: lighter;
}

.font-regular{
	font-size: 18px;
	line-height: 23px;
}

.font-theme-gray{
	color: #515151;
}

.text-center{
	text-align: center;
}

/* Margin and Padding */
.m-0{
	margin: 0px;
}

.mb-0{
	margin-bottom: 0px;
}

.pb-0{
	padding-bottom: 0px;
}

.mt-25{
	margin-top: 25px;
}

.mb-25{
	margin-bottom: 25px;
}

.mt-50{
	margin-top: 50px;
}

.mb-50{
	margin-bottom: 50px;
}

.pt-50{
	padding-top: 50px;
}

.margin-negative-top-100{
	margin-top: -100px;
}

.margin-top-negative-250{
	margin-top: -250px;
}

.margin-auto{
	margin: auto;
}

.mt-100{
	margin-top: 100px;
}

/* Max width */

.w-210{
	max-width: 210px;
}

.w-420{
	max-width: 420px;
}

.w-440{
	max-width: 440px;
}

.w-720{
	max-width: 720px;
}

.w-990{
	max-width: 990px;
}

.home-top-right-image-container{
	/*height: auto;
    width: 730px;*/
    margin-left: -120px !important;
}

/* Homepage cards */

.home-page-card{
	height: 300px;
}

.bg-homepage-card-left{
	background-image: url(https://dev-currikiorg.pantheonsite.io/wp-content/uploads/2021/08/homepage_card_1.svg);
}

.bg-homepage-card-right{
	background-image: url(https://dev-currikiorg.pantheonsite.io/wp-content/uploads/2021/08/homepage_card_2.svg);
}

.homepage-card-container {
    border-radius: 5px 5px 5px 5px;
    overflow: hidden;
    box-shadow: 0px 10px 25px 5px rgb(8 72 146 / 20%);
	background-repeat: no-repeat;
    background-size: cover;
}

.home-page-card-content{
	max-width: 550px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    display: table;
    width: 100%;
}

.home-page-card-container {
    font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
    font-size: 18px;
    color: #FFFFFF!important;
    margin-top: 25px!important;
    margin-bottom: 25px!important;
    margin-left: 51%!important;
	text-align: left;
    max-width: 250px;
}

.home-page-card-description{
	font-size: 18px;
	line-height: 18px;
}

.et_pb_blurb_container{
	cursor: pointer;
}

/* Buttons */
.btn{
	padding-top: 13px;
    padding-right: 45px;
    padding-bottom: 13px;
    padding-left: 45px;
	text-decoration: none;
}

.btn:hover{
	transition: 0.5s;	
}

.btn-theme-primary{
	color: #FFFFFF;
    border-width: 0px;
    border-color: #084892;
    border-radius: 40px;
    font-size: 16px;
    font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif!important;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #084892;
}

.btn-theme-primary:hover{
	background-color: #FFB124;
}

.btn-outline-theme-primary{
	color: #084892;
    border: 1px solid #084892;
    border-radius: 40px;
    font-size: 16px;
    font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif!important;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
}

.btn-outline-theme-primary:hover{
	color: #FFFFFF;
    border-width: 0px;
    border-color: #084892;
    background-color: #084892;
}

.btn-outline-theme-white{
	color: #FFFFFF!important;
    border: 1px solid #FFFFFF;
    border-radius: 40px;
	font-weight: bold;
    padding: 14px 45px;
	text-decoration: none;
    font-size: 16px;
    font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif!important;
    text-transform: uppercase!important;
    background-color: transparent;
	line-height: 1.7em;
	letter-spacing: 0.3px;
}

.btn-outline-theme-white:hover{
	color: #084892!important;
    background-color: #fff;
}

.bg-color-blue{
	background-image: url(https://dev-currikiorg.pantheonsite.io/wp-content/uploads/2021/08/homepage_bg_1.svg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;
}

.bg-testimonials{
	background-image: url(https://dev-currikiorg.pantheonsite.io/wp-content/uploads/2021/08/testimonial-bg.svg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;
}

hr.hr-counter{
	width: 75%;
	border-radius: 10px;
	border-bottom: 3px solid #f8af2c !important;
	margin-top: 10px !important;
}

.font-weight-bold{
	font-weight: bold !important;
}

.font-weight-100{
	font-weight: 100;
}

.font-weight-300{
	font-weight: 300;
}

.font-size-25 {
    font-size: 25px;
    line-height: 30px;
}


/* Testimonials */
.lSSlideOuter .lSPager.lSpg>li.active a, .lSSlideOuter .lSPager.lSpg>li:hover a {
    background-color: #ffb124 !important;
}

.lSSlideOuter .lSPager.lSpg>li a{
	background-color: #fff !important;
}

.lslide > h5 {
	color: #fff;
    font-size: 25px;
    max-width: 520px;
    margin: auto;
	margin-bottom: 30px;
}

.lslide > h5::before {
	white-space: pre-line;
	content: '"';
	color: #f8af2c;
	font-size: 60px;
}

.lslide > h5::after {
	white-space: pre-line;
	content: '"';
	color: #f8af2c;
	font-size: 60px;
}

.gts-company{
	color: #fff;
}

.lSSlideOuter .lSPager.lSpg{
	margin-bottom: 120px !important;
}

/* Contact form */

input.wpcf7-form-control.wpcf7-submit{
	background-color: #084892;
	border-radius: 50px;
}

input.wpcf7-form-control.wpcf7-submit:hover{
	background: #FFB124;
	color: #333;
}

input.wpcf7-form-control.wpcf7-text{
	border-radius: 25px;
}

textarea.wpcf7-form-control.wpcf7-textarea{
	border-radius: 25px;
	resize: none;
}

/* Customers */
.bg-educators{
	background-size: initial;
    background-position: top center;
    background-image: url(https://dev-currikiorg.pantheonsite.io/wp-content/uploads/2021/10/educators_bg.svg)!important;
}

.text-underline{
	border-bottom: 3px solid #f8af2c;
    padding-bottom: 3px;
}

.bg-try_currikistudio{
	background-size: cover;
    background-position: top center;
    background-image: url(https://dev-currikiorg.pantheonsite.io/wp-content/uploads/2021/10/customers_try-currikistudio-now.svg);
}

.btn-outline-white{
	color: #FFFFFF;
    border-width: 0.5px!important;
	font-weight: bold;
    border-color: #FFFFFF;
    border-radius: 40px;
    font-size: 16px;
    font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif!important;
    text-transform: uppercase!important;
    background-color: transparent;
}

.btn-outline-white:hover{
	color: #084892;
    background-color: #fff;
}

.card-list-big-title{
	font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif;
    font-size: 25px;
    color: #084892!important;
    text-align: left;
	font-weight: bold;
}

.max-height-90{
	max-height: 90px;
}

.card-list-title{
	font-family: 'Rubik',Helvetica,Arial,Lucida,sans-serif;
    color: #084892!important;
    line-height: 21.33px;
	font-size: 18px;
	font-weight: bold;
}

.card-with-bg{
    background-size: contain;
    background-position: bottom center;
    background-image: url(http://www.curriki.org/wp-content/uploads/2021/04/cards-webinars.svg);
    border-radius: 5px 5px 5px 5px;
    overflow: hidden;
    box-shadow: 0px 2px 25px 5px rgb(0 0 0 / 10%);
	background-repeat: no-repeat;
}

.min-height-100{
	min-height: 100px;
}

.min-height-150{
	min-height: 150px;
}

input.hs-button.primary.large, .hs-button{
	background: #084892 !important;
    padding: 13px 45px !important;
    border-radius: 40px !important;
}

/* Iframe */

.embed-container {
  --video--width: 1296;
  --video--height: 540;

  position: relative;
  padding-bottom: calc(var(--video--height) / var(--video--width) * 100%); /* 41.66666667% */
  overflow: hidden;
  max-width: 100%;
  background: black;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Footer */

.site-footer{
	display: none;
}

.curriki-footer{
	background-color: #1f4071;
    border-top: #1f4071;
    color: #fdfdfd;
    font-size: 15px;
    line-height: 1.5;
    padding: 20px;
    text-align: center;
}

/* Lists with plus icon */
.entry-content ul > li {
    list-style-type: none;
	padding-left: 1em;
}

.list-plus > li:before {
    content: '';
    display: inline-block;
    height: 13px;
    width: 13px;
    background-image: url(/wp-content/uploads/2021/10/plus-icon.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 0.5em !important;
    margin-left: -1.5em!important;
    margin: 0px;
}

/* Padding left and right 146 */

.padding-left-146{
	padding-left: 146px;
}

.padding-right-146{
	padding-right: 146px;
}

footer.site-footer > a {
	color: white;
}

/* Press and block page */
.content{
	width: 100%;
}

.gb-block-post-grid header .gb-block-post-grid-title a {
    color: #084892!important;
    text-decoration: none;
    font-size: 18px;
	font-weight: bold;
	min-height: 400px !important;
}

.gb-block-post-grid header .gb-block-post-grid-title{
	line-height: 21px !important;
}

.gb-block-post-grid .gb-block-post-grid-more-link {
    display: inline-block;
    box-shadow: none;
    transition: 0.3s ease;
    font-weight: bold;
    color: #084892 !important;
    font-size: 18px;
    text-decoration: underline !important;
	padding-bottom: 20px;
}

.gb-block-post-grid .is-grid article, .gb-block-post-grid .gb-is-grid article {
    margin-bottom: 2.5em;
    min-width: 0;
    -webkit-box-shadow: 10px 10px 13px -18px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 13px -10px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 13px -18px rgb(0 0 0 / 75%);
    border-radius: 10px;
}

ul.post-sidebar > li{
	padding-left: 0px;	
	padding-top: 40px;
	border-bottom: 1px solid #084892;
	padding-bottom: 10px;
}

ul.post-sidebar > li > a{
	color: #084892!important;
	font-weight: 700;
    font-size: 18px;
	text-decoration: none;
}

ul.archives-info, ul.archives-info > li{
	padding-left: 0px;	
}

ul.archives-info > li > a{
	font-size: 14px;
	color: #084892!important;
	text-decoration: none;
}

.border-right{
	border-right: 1px solid #084892;
	padding-right: 30px;
}

h1.entry-title, .singular-image.entry-image, .footer-widgets{
	display: none;
}

.list-style-bullets > li{
	list-style: bullets;
}

.site-inner{
	padding: 0px;
}

/* Blog pagination */

/*.ultp-center-item.pagination-active > a{
	border-radius: 50% !important;
    padding: 10px 15px 10px 15px !important;
}*/

.ultp-center-item > a{
	border-radius: 50% !important;
    padding: 10px 15px 10px 15px !important;
    background: #E5E5E5 !important;
}

.pagination-active > a {
	background: #285aa5 !important;
}

.ultp-block-items-wrap .ultp-block-item .ultp-block-readmore a{
	font-size: 18px !important;
    letter-spacing: 0px !important;
    font-weight: 700 !important;
    text-transform: none !important;
    text-decoration: none !important;
}

//Remove next arrow
li.ultp-next-page-numbers{
	display: none;
}

.ultp-block-item{
	box-shadow: 10px 10px 13px -18px rgb(0 0 0 / 75%);
    border-radius: 10px;
}

.btn {
    padding-top: 10px;
    padding-right: 45px;
    padding-bottom: 10px;
    padding-left: 45px;
    text-decoration: none;
}

.curriki-stats-description{
	font-weight: lighter;
    font-size: 25px;
    line-height: 25px;
}

.border-bottom-yellow{
	border: 1px solid #fff !important;
	border-bottom: 5px solid #f8af2c !important;
}

.modal-backdrop {
	z-index: -1 !important;
}

.font-weight-300{
	font-weight: 300;
}

.cursor-pointer:hover{
	cursor: pointer;
}

.btn-text-decoration-none{
	text-decoration: none;
}
.btn-text-decoration-none:hover{
	text-decoration: underline;	
}

/* Providers */


.providers-bg{
	background-size: initial;
    background-position: top center;
    background-image: url(/wp-content/uploads/2021/11/Success-stories-detail.svg)!important;
}

/* Responsive mobile */

@media (max-width: 600px) {
	.padding-left-146{
		padding-left: 25px;
	}

	.padding-right-146{
		padding-right: 25px;
	}
	
	.margin-mobile-posts{
		margin-left: 25px;
		margin-right: 25px;
	}
	
	.border-right{
		border-right: none;
		padding-right: 0;
	}
	
	.mobile-spacing-top{
		margin-top: 50px !important;
	}
	
	.mobile-spacing-bottom{
		margin-bottom: 50px !important;
	}
	
	.home-top-right-image-container{
		height: auto;
		width: 100%;
		margin-left: 10px !important;
	}
	
	.ultp-block-item{
		padding: 15px;
	}
	
	.img-fluid{
		max-width: 85%;
	}
	
	.home-page-card-container {
			margin-left: 10% !important;
			text-align: left;
			max-width: 405px;
	}
}

/* Responsive tablet */

@media (min-width: 601px) and max-width: 967px) {
	.padding-left-146{
		padding-left: 15px !important;
	}
}


`;
 
export default GlobalStyle;