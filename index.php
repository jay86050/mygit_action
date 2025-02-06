<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Company</title>
    <link rel="icon" href="./asset/favicon.ico" type="image/x-icon">

    <style>

        body{
            background-color: white !important;
           
        }
        
        
    </style>
</head>



<body>
     <!-- Include Navbar --> 
    <?php include 'navbar.php'; ?>

    <?php include 'hero.php'; ?>
 
    <?php include 'OurExepertice.php'; ?>

    <?php include 'planning.php'; ?>

    <?php include 'wedo.php'; ?>

    <?php include 'OurClients.php'; ?>

    <?php include 'testimonial.php'; ?>

    <?php include 'GetIntouch.php'; ?>

    <?php include 'latestposts.php'; ?>

    <?php include 'footer.php'; ?>

    
 <!-- Include Planning Section -->

 <!-- Include Our Leaders Section --> 
  

    <!-- Include Footer -->
   

    <!-- Custom Scripts -->
    <script>
        // Navbar toggler functionality
        document.addEventListener('DOMContentLoaded', function() {
            const navbarToggler = document.querySelector('.navbar-toggler');
            navbarToggler.addEventListener('click', function(){
                const navbarContent = document.getElementById('navbarSupportedContent');
                navbarContent.classList.toggle('show');
                console.log("Navbar toggled");
            });
        });
    </script>
</body>
</html>