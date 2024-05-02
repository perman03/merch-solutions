<template>
    <div class="content">
		<div class = "hijo">
			<h1>Unete</h1>
        	<p class="caja">
           		 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid distinctio reprehenderit sint, magnam nihil voluptatibus odit repellendus accusamus magni. Voluptatem, quam nesciunt obcaecati vero deserunt numquam ex fugit asperiores officiis!
       		</p>
        <p>
            <router-link class="btn" to='/BolsaDeTrabajo'>Unete</router-link>
        </p>	
		</div>
       
    </div>
</template>

<style scoped>
		
		.content{
			background-image: url('https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
			background-size: cover;
			overflow: hidden;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		.hijo{
  			
background: rgba(255,255,255,1);
background: -moz-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(246,246,246,0.53) 47%, rgba(237,237,237,0) 100%);
background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,0.53)), color-stop(100%, rgba(237,237,237,0)));
background: -webkit-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(246,246,246,0.53) 47%, rgba(237,237,237,0) 100%);
background: -o-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(246,246,246,0.53) 47%, rgba(237,237,237,0) 100%);
background: -ms-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(246,246,246,0.53) 47%, rgba(237,237,237,0) 100%);
background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(246,246,246,0.53) 47%, rgba(237,237,237,0) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );			width: 400px;
			border-radius: 35px	35px 35px 35px;
			font-family: sans-serif;
			font-size: 18px;
			font-weight: 400;
			color: black;
		}

	.btn {
		width: 150px;
		height: 50px;
		border:none;
		border:solid 2px black;
		border-radius: 5px;
		background: rgba(255, 255, 255,0);
		font-size: 25px;
	}

	.btn:hover {
     	background:black;
     	color:white; 
	}

	

</style>