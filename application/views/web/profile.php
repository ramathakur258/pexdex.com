
        
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
                                    <li class="active">
                                       <a href="<?php echo base_url('web/profile'); ?>">
                                       <i class="far fa-user"></i>
                                       Profile </a>
									   
                                    </li>
                                    <li>
                                       <a href="<?php echo base_url('web/notification');?>">
                                       <i class="far fa-bell"></i>
                                       Notification </a>
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
                                 <h5>Profile Information</h5>
								 <table class="table" width="80px" align="center">
                                    <tbody >
                                       <tr>
                                          <td class="text-left">Company/Shop name:</td>
                                          <td style="text-align:left;"><b> <?php if(!empty($record)) { echo $record->shop_name; } ;?></b></td>
                                       </tr>
                                       <tr>
                                          <td class="text-left">Mobile Number:</td>
                                          <td style="text-align:left;"><b><?php if(!empty($record)) { echo $record->mobile; } ;?></b></td>
                                       </tr>
                                       <tr>
                                          <td class="text-left">Pan Number:</td>
                                          <td style="text-align:left;"><b> <?php if(!empty($record)) { echo $record->pan_number; } ;?></b></td>
                                       </tr>
                                       <tr>
                                          <td class="text-left">Aadhaar Card Number (UID):</td>
                                          <td style="text-align:left;"><b><?php if(!empty($record)) { echo $record->aadhar_number; } ;?></b></td>
                                       </tr>
                                       <tr>
                                          <td class="text-left">GST No:</td>
                                          <td style="text-align:left;"><b> <?php if(!empty($record)) { echo $record->gst_number; } ;?></b></td>
                                       </tr>
									   <tr>
                                          <td class="text-left">Retailer Type:</td>
                                          <td style="text-align:left;"><b> <?php if(!empty($record)) { echo $record->retailer_type; } ;?></b></td>
                                       </tr>
                                       <tr>
                                          <td class="text-left">Firm Type:</td>
                                          <td style="text-align:left;"><b><?php if(!empty($record)) { echo $record->firm_type; } ;?></b></td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        