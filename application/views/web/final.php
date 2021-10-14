<div class="container">
   <div class="row">
      <div class="col-md-6 mx-auto mt-5">
         <div class="bg">

		 <?php  if($record->payment_status == 'TXN_SUCCESS') {?>
            <div class="card green--border">
				<span class="card__success"><i class="far fa-smile" aria-hidden="true"></i></span>
				<h1 class="card__msg">Payment Complete</h1>
				<h2 class="card__submsg">Thank you for your transfer</h2>
				<p>ORDER ID: <?php echo $record->order_id; ?></p>
				<div class="card__body">
				  <h1 class="card__price"><span>₹</span><?php echo $record->amount; ?><span>.00</span></h1>
				</div>
				<div class="card__tags">
					<span class="card__tag"> Transaction ID: </span>
					<span class="card__tag"><?php echo $record->txn_id; ?></span>        
				</div>
				<a href="<?php echo base_url('web') ?>" class="bhome">Back Home</a>
				
			</div>
			  
			  <?php }else{ ?>
			  
			<div class="card red--border">
				<span class="card__fail"><i class="fas fa-frown" aria-hidden="true"></i></span>
				<h1 class="card__msg">Payment Failed</h1>
				<h2 class="card__submsg">Your Payment is failed please try again</h2>
				<p>ORDER ID: <?php echo $record->order_id; ?></p>
				<div class="card__body">
				  <h1 class="card__price"><span>₹ </span><?php echo $record->amount; ?><span></span></h1>
				</div>
				<div class="card__tags">
					<span class="card__tag"> Transaction ID: </span>
					<span class="card__tag"><?php echo $record->txn_id; ?></span>        
				</div>
				<a href="<?php echo base_url('web') ?>" class="bhome">Back Home</a>
				
			  </div>
			<?php } ?>
		  </div>
      </div>
   </div>
</div>