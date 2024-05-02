<template>
    <div class="content">
        <!--<h1>Publicidad</h1>
        <div class="d-flex justify-content-center">
            <img src="../../assets/tiburon.jpg" class="img-fluid"  alt="Responsive image" width="90%">
        </div>

        <div class="Panel">

            <picture>
			    <source srcset="../../assets/tesla_576x480.jpg" media="(max-width: 576px)">
			    <source srcset="../../assets/tesla_768x640.jpg" media="(max-width: 768px)">
			    <source srcset="../../assets/tesla_992x827.jpg" media="(max-width: 992px)">
                <source srcset="../../assets/tesla_992x827.jpg" media="(max-width: 1200px)">
			    <img src="../../assets/tesla_1920x1600.jpg" srcset="../../assets/tesla_1920x1600.jpg" alt=""/>
		    </picture>

        </div>-->

        

    </div>
</template>

<style scoped>

    /*
    .Panel img{    
        max-width: 100%;
        height: 100px;
        display: block; 
        margin: 0 auto;     
    }*/

    @media (max-width: 1920px) {
        .Panel img{    
            max-width: 100%;
            height: 968px;
            display: block; 
            margin: 0 auto;     
        }
    }

    .content{
			background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/bf5ec633-7cc2-4acb-8944-a74816e76f3e/bvlatuR/std/2880x2400/Desktop-ModelS');
			background-size: cover;
			overflow: hidden;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
	}

    @media (max-width: 768px){
        .content{
			background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/93aae622-1bd3-43fa-8b08-302b5357099f/bvlatuR/std/800x2100/Mobile-ModelS');
			background-size: cover;
			overflow: hidden;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
	    }
    }

    @media (max-width: 992px){
        .content{
			background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/bf5ec633-7cc2-4acb-8944-a74816e76f3e/bvlatuR/std/2880x2400/Desktop-ModelS');
			background-size: cover;
			overflow: hidden;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
	    }
    }

    @media (max-width: 498px){
        .content{
			background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/93aae622-1bd3-43fa-8b08-302b5357099f/bvlatuR/std/800x2100/Mobile-ModelS');
			background-size: cover;
			overflow: hidden;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
	    }
    }    

</style>