
         <section class="pos-rel banner-padd-pro">
            <div class="container">
               <div class="row justify-content-center align-items-center d-flex profile">
                  <div class="col-md-12 col-lg-10">
                     <div class="row">
                        <div class="col-sm-4">
                           <div class="profile-sidebar">
                              <!-- SIDEBAR USERPIC -->
                              <div class="profile-userpic">
                              <?php if(empty($record->photo)) { ?>
                                 <img src="<?php echo base_url("assets/images/team-5.png")?>" class="img-responsive" alt="">
                                 <?php }else{  ?>
                                    <img src="<?php echo base_url("uploads/documents/$record->photo")?>" class="img-responsive" alt="">
                               <?php  } ?>
                              </div>
                              <!-- END SIDEBAR USERPIC -->
                              <!-- SIDEBAR USER TITLE -->
                              <div class="profile-usertitle">
                                 <div class="profile-usertitle-name">
                                 <?php if(!empty($record)) { echo $record->first_name; echo "&nbsp"; echo $record->last_name; } ;?>
                                 </div>
                                 <div class="profile-usertitle-job">
                                 <?php if(!empty($record)) { echo $record->email; } ;?>
                                 </div>
                              </div>
                              <!-- END SIDEBAR USER TITLE -->
                              <!-- SIDEBAR MENU -->
                              <div class="profile-usermenu">
                                 <ul class="nav">
                                    <li>
                                       <a href="<?php echo base_url('web/profile'); ?>">
                                       <i class="far fa-user"></i>
                                       Profile </a>
                                    </li>
                                    <li class="active">
                                    <a href="<?php echo base_url('web/notification');?>">
                                       <i class="far fa-bell"></i>
                                       Notification  </a>
                                       <?php if(!empty($record)){ if($record->approval_status =='approved'){ 
                                               if($record->payment_status =='pending'){ ?>
                                                <span class="newclass flashit">New</span>
                                             <?php  }
                                       }} ?>
									  
                                    </li>
                                    <li>
                                       <a href="<?php echo base_url('web/logout') ?>">
                                       <i class="fas fa-sign-out-alt"></i>
                                       Logout </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- END MENU -->
                           </div>
                        </div>
                        <div class="col-sm-8">
                           <div class="profile-content rightside-bar">
                              <div class="col-sm-12">
                                 <h5>Chalonline Features</h5>
								 <div class="dashboard-section user-statistic-block">
								  <div class="user-statistic">
									<i class="fas fa-rupee-sign"></i> 
									<h3><?php if(!empty($record)) { echo $record->amount; } ;?></h3>
								  </div>
								</div>

                        <?php if(!empty($record->features)) { 
                              foreach($features as $row){
                                 ?>
								<p class="listing-featured">
                       
                                 <span><?php echo $row; ?></span>

                                 <?php
                              } ?> 
                         <!-- <span>Unlimited Category listing,</span>
								  <span>Someone downloaded,</span> 
								  <span>Someone bookmarked </span>
								  <span>Lorem ipsum is placeholder</span>
								  <span>Unlimited Category listing,</span>
								  <span>Someone downloaded,</span> 
								  <span>Someone bookmarked </span>
								  <span>Lorem ipsum is placeholder</span>
								  <span>Unlimited Category listing,</span>
								  <span>Someone downloaded,</span> 
								  <span>Someone bookmarked </span>
								  <span>Lorem ipsum is placeholder</span> -->
                          </p>
                          <?php
                         }else{ ?>
						 <div class="centerimgg"><p><img src="../assets/images/get-smile.png"/></p>
                         <p class="short">we will connect to you shortly</p>
						 </div>
						 
                       <?php  } ;?>
								  
								<!-- <a href="<?php //echo base_url("web/pay_now") ?>" class="paynow">Pay Now</a> -->
                        <!-- <a href="" class="paynow">Pay Now</a> -->
                       <?php if($record->amount !=='0.00'){
                           if($record->payment_status == 'pending'){  ?>
                              <a href="<?php echo base_url("web/pay_now") ?>" class="paynow">Pay Now</a>
                        <?php   }else{  ?>
                              <a href="" disabled class="paynow">Paid</a>
                       <?php    }
                        } ?> 
								 
                              </div>
                           
                           </div>
                         
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
        