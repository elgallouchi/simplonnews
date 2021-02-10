// Header
let header = document.querySelector('header');
let headerHTML = `
<div class="container">
    <div class="logo">
        <a href="/">
            <img src="../img/logo_simplon_news.png" alt="logo simplon news">
        </a>
    </div>
    <div class="profile">
        <i class="fas fa-user-circle" title="profile"></i>
    </div>
</div>
`;
header.innerHTML = headerHTML;

// Footer
let footer = document.querySelector('footer');
let footerHTML = `
<div class="container">
    <div class="social-media">
        <ul>
            <li><a href=""><i class="fab fa-linkedin"></i></a></li>
            <li><a href=""><i class="fab fa-github-square"></i></a></li>
            <li><a href=""><i class="fab fa-facebook-square"></i></a></li>
        </ul>
    </div>
    <div class="copyright">
        <p>All Right Reserved &copy; 2021</p>
    </div>
</div>
`;
footer.innerHTML = footerHTML;