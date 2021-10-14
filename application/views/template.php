<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chalo Online</title>
    <meta name="description" content=""/>
    <meta name="keywords" content="">


    <!-- css  <?php// echo base_url("assets/") ?> -->
    <link href="<?php echo base_url("assets/css/bootstrap-min.css") ?>" rel="stylesheet">
    <link href="<?php echo base_url("assets/css/bootstrap-default.css") ?>" rel="stylesheet">
    <link href="<?php echo base_url("assets/css/custom.css") ?>" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet">
    <!-- Favicons -->

	<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">

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
				<div class="col-6 col-md-3 pos-rel">
					<div class="header-logo-wrp">
						<a class="header-logo pd-tb-small" href="#"><img src="<?php echo base_url("assets/images/logo.png") ?>" alt=""></a>
					</div>
				</div><!-- // END : Column //  -->
				
				<!--=================================
				= Navigation links
				==================================-->
				<div class="col-6 col-md-9 align-r">
					<ul class="row gt20 justify-content-md-end mr-0 align-items-center">
						<li class="col-md-auto"></li>
						<li class="col-md-auto bdr-l bdr-op-4 pd-l-20">
							<span class="txt-default mr-r-20 align-m fs16 bold-3 m-content">
							<i class="fa fa-phone"></i>&nbsp; 9669505707</span>
							  <!-- <i class="fa fa-phone"></i>&nbsp; 0731-497227</span>    -->
							<a href="#contact" class="btn btn-default mini mr-r-4 bdr-glass m-content">
							  <i class="far fa-envelope mr-r-4"></i>&nbsp; support@texutive.com</a>
							
							<?php if(empty($this->session->userdata('display_name'))) { ?>

							<a href="JavaScript:Void(0);" data-toggle="modal" data-target="#login" class="btn btn-default lgoin mini mr-r-4 bdr-glass">
							  <i class="fas fa-sign-in-alt mr-r-4"></i>Login</a>

                             <?php }else{ ?>

							<a href="<?php echo base_url('profile') ?>" class="btn btn-default lgoin mini mr-r-4 bdr-glass">
                           <i class="fas fa-user mr-r-4"></i>   <?php print_r($this->session->userdata('display_name'));?></a>

						    <?php } ?>
						</li>
					</ul>

				</div><!-- // END : Column //  -->

			</div><!-- // END : row //  -->

		</div><!-- // END : container //  -->
	</header>
	<!-- ************** END : Header **************  -->

    <?php $this->load->view($content); ?>


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
                    <!--<a href="#"><img src="<?php// echo base_url("assets/images/playstore.png") ?>" class="img-block-no"/></a>-->
					
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



 <!-- Modal -->
  <div class="modal fade" id="login" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title logintitle">Sign In</h4>
		  <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <section class="wrapper">
				<form method="post" name="login" class="form">
					<div class="input-control">
						<label for="email" class="input-label" hidden>Email Address</label>
						<input type="email" name="email" class="input-field" placeholder="Email Address">
					</div>
					<div class="input-control">
						<label for="password" class="input-label" hidden>Password</label>
						<input type="password" name="password" class="input-field" placeholder="Password">
					</div>
					<div class="input-control">
						<input type="submit" name="submit" class="input-submit" value="Login">
					</div>
				</form>
			</section>
        </div>
      </div>
      
    </div>
  </div>
  









<script src="<?php echo base_url("assets/js/chalo-online.js") ?>"></script>
<script>
   $(window).load(function(){
      $('#onload').modal('show');
   });
</script>
<script type="text/javascript">


<?php if($this->session->flashdata('success')){ ?>
    toastr.success("<?php echo $this->session->flashdata('success'); ?>");
<?php }else if($this->session->flashdata('error')){  ?>
    toastr.error("<?php echo $this->session->flashdata('error'); ?>");
<?php }else if($this->session->flashdata('warning')){  ?>
    toastr.warning("<?php echo $this->session->flashdata('warning'); ?>");
<?php }else if($this->session->flashdata('info')){  ?>
    toastr.info("<?php echo $this->session->flashdata('info'); ?>");
<?php } ?>


</script>

</body>
</html>