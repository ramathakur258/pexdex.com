<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chalo Online | Form</title>
    <meta name="description" content=""/>
    <meta name="keywords" content="">


    <!-- css -->  
    <link href="<?php echo base_url("assets/css/bootstrap-min.css") ?>" rel="stylesheet">
    <link href="<?php echo base_url("assets/css/bootstrap-default.css") ?>" rel="stylesheet">
    <link href="<?php echo base_url("assets/css/custom.css") ?>" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet">
	
	<link href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css" rel="stylesheet">

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
	<script type="text/javascript" src="https://ajax.microsoft.com/ajax/jQuery.Validate/1.6/jQuery.Validate.min.js"></script>
    <!-- Favicons -->

</head>
<body>
<div class="page-loader"><b class="spinner"></b></div>
<div id="page">


	<!--
	************************************************************
	* Header
	************************************************************ -->
	<header class="main-head shadow-tiny">
		<div class="container pd-0 min-px-h60 bdr-b bdr-op-light-1">
			
			<div class="row gt0 align-items-center head-row">
				
				<!--=================================
				= Logo section
				==================================-->
				<div class="col-md-3 pos-rel">
					<div class="header-logo-wrp">
						<a class="header-logo pd-tb-small" href="<?php echo base_url();?>"><img src="<?php echo base_url("assets/images/logo.png") ?>" alt=""></a>
					</div>
				</div><!-- // END : Column //  -->
				
				<!--=================================
				= Navigation links
				==================================-->
				<div class="col-md-9 align-r m-content">
					<ul class="row gt20 justify-content-md-end mr-0 align-items-center">
						<li class="col-md-auto">		</li>
						<li class="col-md-auto bdr-l bdr-op-4 pd-l-20">
							<span class="txt-default mr-r-20 align-m fs16 bold-3">
							<i class="fa fa-phone"></i>&nbsp; 9669505707</span>
							  <!-- <i class="fa fa-phone"></i>&nbsp; 0731-497227</span> -->
							<a href="#contact" class="btn btn-default mini mr-r-4 bdr-glass">
							  <i class="far fa-envelope mr-r-4"></i>&nbsp; support@texutive.com</a>
						</li>
					</ul>

				</div><!-- // END : Column //  -->

			</div><!-- // END : row //  -->

		</div><!-- // END : container //  -->
	</header>
	<!-- ************** END : Header **************  -->

	<!--
	************************************************************
	* Content section
	************************************************************ -->

	<section class="pos-rel pd-tb-small">
	  <div class="container align-c">
	     <div class="w75 mr-auto" data-animate-in="fadeIn">
				<h2 class="title">Chalo Online - Dealer Registration Form</h2>
				<p>Thank you for your interest in Chalo Online – A Texcutive Venture.</p>
		 </div>
	    
	     <div class="row justify-content-center align-items-center add_bottom_15">
			<div class="col-lg-8">
			
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
               <div class="col-md-12 mx-0 padad12">
                        <form method="post" id="msform" enctype="multipart/form-data" >
                            
                            <fieldset id="account_information">
                                <div class="form-card">
                                    <h2 class="fs-title">Account Information</h2> 
								  <div class="row">	
									<div class="col-sm-12 mb-15">
									   <label>Company/Shop name*</label>
									   <input type="text"  name="shop_name" id="shop_name" /> 
									   
									</div>
									<div class="col-sm-4 mb-15">
									   <label>First Name*</label>
									   <input type="text"  name="first_name" id="first_name"/> 
									</div>
                                   <div class="col-sm-4 mb-15">
									   <label>Middle Name</label>
									   <input type="text"  name="middle_name" id="middle_name"/> 
									</div>	
                                    <div class="col-sm-4 mb-15">
									   <label>Last Name*</label>
									   <input type="text"  name="last_name" id="last_name"/> 
									</div>										
									<div class="col-sm-6 mb-15">
									   <label>Gender*</label>
									   <select id="gender" name="gender"><option>Male</option><option>Female</option></select>
									</div>
									<div class="col-sm-6 mb-15">
									   <label>Mobile Number*</label>
									   <input type="text"  name="mobile" id="mobile"/> 
									</div>
										<div class="col-sm-6 mb-15">
									   <label>Password*</label>
									   <input type="password" id="password" name="password"/> 
									</div>
									<div class="col-sm-6 mb-15">
									   <label>Confirm Password*</label>
									   <input type="password" id="confirm_password" name="confirm_password"/> 
									</div>
								</div>	
								</div> 
								<input type="button" name="next"  class="next_step action-button" value="Next Step" />
                            </fieldset>
							
							
                            <fieldset id="personal_information">
                                <div class="form-card">
                                    <h2 class="fs-title">Personal Information</h2> 
									<div class="row">	
										<div class="col-sm-6 mb-15">
										   <label>Date Of Birth*</label>
										   <input type="date" id="dob" name="dob" /> 
										</div>
									    <div class="col-sm-6 mb-15">
										   <label>Pan Number* </label>
										   <input type="text" id="pan_number" name="pan_number" /> 
										</div>
									    <div class="col-sm-6 mb-15">
										   <label>Aadhaar Card Number (UID)* </label>
										   <input type="text" id="aadhar" name="aadhar" /> 
										</div>
									     <div class="col-sm-6 mb-15">
										   <label>Email* </label>
										   <input type="text" id="email" name="email" /> 
										</div>
									    <div class="col-sm-6 mb-15">
										   <label>Retailer Type* </label>
										   <input type="text" id="retailer_type" name="retailer_type" /> 
										</div>
										 <div class="col-sm-6 mb-15">
										   <label>Firm Type*  </label>
										   <input type="text" id="firm_type" name="firm_type" /> 
										</div>
									</div>
                                 </div> 
								<input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
								<input type="button" name="next"  id="next_step" class="next_step action-button" value="Next Step" />
                            </fieldset>
							
							
							
                            <fieldset id="address_information">
                                <div class="form-card">
                                    <h2 class="fs-title">Address Information</h2>
                                    <div class="row">
                                        <div class="col-sm-12 mb-15"> 
										  <label>Address Line 1* </label> 
										  <input type="text" id="address1" name="address1" /> 
										</div>
										<div class="col-sm-12 mb-15"> 
										  <label>Address Line 2* </label> 
										  <input type="text" id="address2" name="address2" /> 
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>Land Mark* </label> 
										  <input type="text" id="land_mark" name="land_mark" /> 
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>Pin Code*  </label> 
										  <input type="text" id="pincode" name="pincode" /> 
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>City*  </label> 
										  <input type="text" id="city" name="city" /> 
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>State* </label> 
										  <input type="text" id="state" name="state" /> 
										  <!-- <select id="state"><option>Madhya Pradesh</option><option>Gujrat</option></select> -->
										</div>
										
                                    </div>
                                </div>
								<input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
								<input type="button" name="next" id="next_step" class="next_step action-button" value="Next" />
                            </fieldset>
							
							
							<fieldset  id="business_information">
                                <div class="form-card">
                                    <h2 class="fs-title">Business Information</h2>
                                    <div class="row">
                                        <div class="col-sm-5 mb-15"> 
										  <label>How long have you been in business?*</label> 
										  <input type="text" id="busineess_duration" name="busineess_duration" /> 
										</div>
										<div class="col-sm-7 mb-15"> 
										  <label>Why do you want to take your business online?</label> 
										  <input type="text" id="why_online" name="why_online" /> 
										</div>
										<div class="col-sm-12 mb-15"> 
										  <label>Please list the products that you service/sell. </label> 
										  <select id="products" name="products[]" multiple data-style="bg-white rounded-pill px-4 py-3 shadow-sm " class="selectpicker w-100">
											<option>Food</option>
											<option>Clothes</option>
											<option>Grocery</option>
										</select><!-- End --> 
										</div>
										
										<div class="col-sm-6 mb-15"> 
										  <label>How did you hear about Chalo Online? </label> 
										  <select id="how_hear_about_chaloonline" name="how_hear_about_chaloonline">
											  <option>#Other Retailer</option>
											  <option>#Social Media</option>
											  <option>#Website</option>
											  <option>#Newspaper Ad</option>
											  <option>#Our Sales Team</option>
											  <option># Others</option>
										 </select>
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>What is your annual sales volume?*  </label> 
										  <input type="text" id="annual_sales_volume" name="annual_sales_volume" /> 
										</div>
										<div class="col-sm-12 mb-15"> 
										  <label>What market (region) do you service? What is your geographic reach?*</label> 
										  <input type="text" id="geographic_reach" name="geographic_reach" /> 
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>How many sales people do you have on your team?  </label> 
										  <input type="text" id="sales_people_number" name="sales_people_number" /> 
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>What is your monthly marketing budget and what marketing mediums do you utilize?*</label> 
										  <input type="text" id="monthly_market_budget" name="monthly_market_budget" /> 
										</div>
										<div class="col-sm-6 mb-15"> 
										  <label>What are your sales goals for 2021-2022?</label> 
										  <input type="text" id="sales_goals" name="sales_goals" /> 
										</div>
											<div class="col-sm-6 mb-15"> 
										  <label>GST number</label> 
										  <input type="text" id="gst_number" name="gst_number" /> 
										</div>
										
										
									</div>
                                </div>
								<input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
								<input type="button" name="next" id="next_step" class="next_step action-button" value="Next" />
                            </fieldset>
							
							<fieldset  id="upload_document">
                                <div class="form-card">
                                    <h2 class="fs-title">Document Upload</h2>
                                    <div class="row">
                                        <div class="col-sm-6"> 
										  <label>Upload your Photo*</label> 
										   <div class="yes">
											<span class="btn_upload">
											  <input type="file" id="imag" name="photo" title="" class="input-img"/>
											  Choose Image
											  </span>
											<img id="ImgPreview" src="" class="preview1" />
											<a href="" id="removeImage1" class="btn-rmv1" />Delete</a>
										  </div>
										</div>
										<div class="col-sm-6"> 
										  <label>Upload your Address proof</label> 
										   <div class="yes">
											<span class="btn_upload">
											  <input type="file" id="imag2" name="address_proof" title="" class="input-img"/>
											  Choose Image
											  </span>
											<img id="ImgPreview2" src="" class="preview2" />
											<a href="" id="removeImage2" class="btn-rmv2" />Delete</a>
										  </div>
										</div>
										<div class="col-sm-6"> 
										  <label>Upload your Pan Card* </label> 
										   <div class="yes">
											<span class="btn_upload">
											  <input type="file" id="imag3" name="pan_card" title="" class="input-img"/>
											  Choose Image
											  </span>
											<img id="ImgPreview3" src="" class="preview3" />
											<a href="" id="removeImage3" class="btn-rmv3" />Delete</a>
										  </div>
										</div>
										<!--<div class="col-sm-6"> -->
										<!--  <label>Upload your Tin No. Certificate</label> -->
										<!--   <div class="yes">-->
										<!--	<span class="btn_upload">-->
										<!--	  <input type="file" id="imag4" title="" class="input-img"/>-->
										<!--	  Choose Image-->
										<!--	  </span>-->
										<!--	<img id="ImgPreview4" src="" class="preview4" />-->
										<!--	<a href="" id="removeImage4" class="btn-rmv4" />Delete</a>-->
										<!--  </div>-->
										<!--</div>-->
										
									</div>
                                </div>
								<input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
								<input type="submit" name="make_payment" class="next action-button" value="Done" />
                            </fieldset>
							
							
                            <!-- <fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title text-center">Success !</h2> 
                                    <div class="row justify-content-center">
                                     <div class="col-3"> 
										 <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image"> 
									</div>
                                    </div> 
                                    <div class="row justify-content-center">
                                        <div class="col-9 text-center">
                                            <h5>Thank you for your interest in Chalo Online – A Texcutive Venture.</h5>
                                        </div>
                                    </div>
                                </div>
                            </fieldset> -->
                        </form>
                    </div>
                </div>
            </div>

					
				
			</div>
			
		 </div>
		 
	   </div>
	</section>
	


	
	<!--
	************************************************************
	* Contact section
	************************************************************ -->
	<section class="pos-rel pd-tb-mini text-center" id="contact" style="background:url(<?php echo base_url("assets/images/clouds1.png") ?>);background-color: #fc364a !important;">
		<div class="container typo-light">
			<div class="row gt20 mb20">
				<div class="col-md-12" data-animate-in="fadeInLeft">
					
					<!--=================================
					= Contact information
					==================================-->
					<h2 class="title">Start your business journey with Chalonline</h2>
					<p class="title-sub small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					<a  href="<?php echo base_url('form');?>"><button class="btn btn-primary" style="background-color:black; color:white; border:none;" >Enroll Now</button></a>
				    <!-- <a href="#"><img src="<?php //echo base_url("assets/images/playstore.png") ?>" class="img-block-no"/></a> -->
					
				</div><!-- // END : column //  -->
			</div><!-- // END : row //  -->
		</div>

	</section>
	<!-- ************** END : Contact section **************  -->




<!--
	************************************************************
	* Footer section
	************************************************************ -->
	<footer class="pos-rel pd-tb-small bg-dark" style="padding-bottom:20px;">
		<div class="container typo-light">
			<div class="row gt20 mb20">
				
				<!--=================================
				= Postal address
				==================================-->
				<div class="col-md-4" data-animate-in="fadeIn">
					<p class="mb-0"><a href="#" class="inline-block max-px-w150"><img src="<?php echo base_url("assets/images/logo1.png") ?>" class="max-px-w140" alt="logo"></a></p>
					<h3 class="title mini bold-n">Texutive Services Pvt.Ltd.</h3>
					<p class="op-05">101, Om Gurudev Plaza, Bamori, Scheme No. 54, <br> Indore Pin: 452010</p>
				</div><!-- // END : column //  -->
				
				
				<div class="col-md-8" data-animate-in="fadeInUp">
					<div class="subscribe-block _2 mr-b-20 row mt-20">
					  <div class="info-obj img-l g20 tiny col-sm-6 col-md-6 col-lg-4" style="margin-bottom:20px;">
						<div class="img txt-white"><span class="iconwrp"><i class="far fa-envelope-open"></i></span></div>
						<div class="info">
							<h3 class="title mini mr-b-4">Mail Us</h3>
							<p class="mr-0 op-07">support@texutive.com</p>
					 	</div>
					  </div>
					  <div class="info-obj img-l g20 tiny col-sm-6 col-md-6 col-lg-4" style="margin-bottom:20px;">
						<div class="img txt-white"><span class="iconwrp"><i class="fab fa-whatsapp"></i></span></div>
						<div class="info">
							<h3 class="title mini mr-b-4">WhatsApp</h3>
							<p class="mr-0 op-07">+91 9669505707</p>
					 	</div>
					  </div>
					  <div class="info-obj img-l g20 tiny col-sm-6 col-md-6 col-lg-4">
						<div class="img txt-white"><span class="iconwrp"><i class="fas fa-phone"></i></span></div>
						<div class="info">
							<h3 class="title mini mr-b-4">Call Us</h3>
							<p class="mr-0 op-07">0731-497227</p>
					 	</div>
					  </div>
					
					</div><!-- ======= END : Newsletter section =======  -->
					
					<hr class="light">
			  
			  
					<div class="row">
						<div class="col-6 col-sm-6 mr-0 op-05">
						  <a href="#" target="_blank">Chalonline</a> &copy; <span class="copyright-year">2021</span>
						</div>
						
						<div class="col-6 col-sm-6 mr-0 op-05 text-right">
							<a href="#" target="_blank" class="sq30 fs16 mr-r-4 rd-2 bg-glass-light-01 iconbox btn-white"><i class="fab fa-facebook-f"></i></a>
							<a href="#" target="_blank" class="sq30 fs16 mr-r-4 rd-2 bg-glass-light-01 iconbox btn-white"><i class="fab fa-twitter"></i></a>
							<a href="#" target="_blank" class="sq30 fs16 mr-r-4 rd-2 bg-glass-light-01 iconbox btn-white"><i class="fab fa-google"></i></a>
						</div>
					 </div> 
					
					
				</div><!-- // END : column //  -->
			</div>

			    
			
		</div>
	</footer><!-- / Footer section -->
	<!-- ************** END : Footer section **************  -->
</div>
<!-- /#page --> 



<script src=" <?php echo base_url("assets/js/chalo-online.js") ?>"></script>
<script src=" <?php echo base_url("assets/js/step.js") ?>"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/js/bootstrap-select.min.js"></script>
<script>
$(function () {
    $('.selectpicker').selectpicker();
});
</script>
<script>
function readURL(input, imgControlName) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $(imgControlName).attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imag").change(function() {
  // add your logic to decide which image control you'll use
  var imgControlName = "#ImgPreview";
  readURL(this, imgControlName);
  $('.preview1').addClass('it');
  $('.btn-rmv1').addClass('rmv');
});
$("#removeImage1").click(function(e) {
  e.preventDefault();
  $("#imag").val("");
  $("#ImgPreview").attr("src", "");
  $('.preview1').removeClass('it');
  $('.btn-rmv1').removeClass('rmv');
});



$("#imag2").change(function() {
  // add your logic to decide which image control you'll use
  var imgControlName = "#ImgPreview2";
  readURL(this, imgControlName);
  $('.preview2').addClass('it');
  $('.btn-rmv2').addClass('rmv');
});
$("#removeImage2").click(function(e) {
  e.preventDefault();
  $("#imag2").val("");
  $("#ImgPreview").attr("src", "");
  $('.preview2').removeClass('it');
  $('.btn-rmv2').removeClass('rmv');
});



$("#imag3").change(function() {
  // add your logic to decide which image control you'll use
  var imgControlName = "#ImgPreview3";
 
  readURL(this, imgControlName);
  $('.preview3').addClass('it');
  $('.btn-rmv3').addClass('rmv');
});
$("#removeImage1").click(function(e) {
  e.preventDefault();
  $("#imag3").val("");
  $("#ImgPreview3").attr("src", "");
  $('.preview3').removeClass('it');
  $('.btn-rmv3').removeClass('rmv');
});


$("#imag4").change(function() {
  // add your logic to decide which image control you'll use
  var imgControlName = "#ImgPreview4";
  readURL(this, imgControlName);
  $('.preview4').addClass('it');
  $('.btn-rmv4').addClass('rmv');
});
$("#removeImage4").click(function(e) {
  e.preventDefault();
  $("#imag4").val("");
  $("#ImgPreview4").attr("src", "");
  $('.preview4').removeClass('it');
  $('.btn-rmv4').removeClass('rmv');
});


$(".next_step").click(function(){
		var form = $("#msform");
		console.log(form)
		form.validate({
			rules: {
				shop_name: "required",
				first_name: "required",
				last_name: "required",
				gender: "required",
				mobile:{
				    required: true,
					number: true,
					remote: {
						url: "web/check_phone",
						type: "post",
						data:{
                          email: function()
                          {
                              return $('#msform :input[name="mobile"]').val();
                          }
                      },
					
					},
				
				},  
				password:"required",
				confirm_password: {
					required: true,
					equalTo: '#password',
				},
				dob: "required",
				pan_number:"required",
				aadhar: "required",
				email:  {
					required: true,
					email: true,
					remote: {
						url: "web/check_email",
						type: "post",
						data:{
                          email: function()
                          {
                              return $('#msform :input[name="email"]').val();
                          }
                      },
					
					},
				 },
				retailer_type:"required",
				firm_type:"required",
				address1:"required",
				address2:"required",
				land_mark:"required",
				pincode:{
					required: true,
					number: true,
				}, 
				city:"required",
				state:"required",
				busineess_duration:"required",
				why_online:"required",
				products:"required",
				how_hear_about_chaloonline:"required",
				annual_sales_volume:"required",
				geographic_reach:"required",
				sales_people_number:"required",
				monthly_market_budget:"required",
				sales_goals:"required"
				
			},
			messages: {
				shop_name: "Shop Name required" ,
				first_name: "First Name required",
				last_name: "Last Name required",
				gender:"gender required",
				mobile:{
				  
					required: "Mobile required",
					number: "number should be numeric",
					remote:"Mobile already exist",
					
				},
				password:"Password required",
				confirm_password: {
					required: "password required",
					equalTo: "Password don't match",
				},
				dob:"Date of Birth required",
				pan_number:"Pan Number required",
				aadhar:"Pan Number required",
				email: { 
					required:"Email required",
					email:"Please enter valid email",
					remote:"Email already exist",
					//remote:jQuery.validator.format("{0} is already taken.")
				},
				retailer_type:" Retailer type required",
				firm_type:"Firm type required",
				address1:" Address required",
				address2:"Address required",
				land_mark:"Land Mark required",
				pincode:{
					required: "Pincode required",
					number: "Pincode should be numeric",
				},
				city:"City required",
				state:"State required",
				busineess_duration:"Field required",
				why_online:"Field required",
				products:"Field required",
				how_hear_about_chaloonline:"Field required",
				annual_sales_volume:"Field required",
				geographic_reach:"Field required",
				sales_people_number:"Field required",
				monthly_market_budget:"Field required",
				sales_goals:"Field required",

			}
		});
		
		
		if (form.valid() == true){

			if ($('#account_information').is(":visible")){
			    
			    
			    
			     var mystr=$("#mobile").val();
                    $.ajax({
                      url: 'https://chaloonline.in/web/check_phone',
                      method:"POST",
                      data:{"mobile":mystr},
                      success: function(data) {
                          console.log(data)
                        if(data=="true")
                        {
                            
                        var	current_fs = $('#account_information');
					    var	next_fs = $('#personal_information');
					    	next_fs.show();
	                		current_fs.hide();
                                          }
                        else
                        {
                          alert("mobile already registered");
                        }
                      }
                    });
			    
			    
					
					}else if($('#personal_information').is(":visible")){
					    
					    
					      var mystr=$("#email").val();
                    $.ajax({
                      url: 'https://chaloonline.in/web/check_email',
                      method:"POST",
                      data:{"email":mystr},
                      success: function(data) {
                          console.log(data)
                        if(data=="true")
                        {
                            
                         	current_fs = $('#personal_information');
					    	next_fs = $('#address_information');
						
							next_fs.show();
		                	current_fs.hide();
                                          }
                        else
                        {
                          alert("email already registered");
                        }
                      }
                    });
					    
					}else if($('#address_information').is(":visible")){
						current_fs = $('#address_information');
						next_fs = $('#business_information');
						
							next_fs.show();
		                	current_fs.hide();
					}else if($('#business_information').is(":visible")){
						current_fs = $('#business_information');
						next_fs = $('#upload_document');
						
							next_fs.show();
		                	current_fs.hide();
					}

		
		}
	});



</script>

</body>
</html>