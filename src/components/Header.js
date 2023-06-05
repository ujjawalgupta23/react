// this is export by name
export const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://cdn.cp.adobe.io/content/2/dcx/7bfaff9a-958a-4d26-bd10-9ead917802ad/rendition/preview.jpg/version/1/format/jpg/dimension/width/size/1200"
            alt="logo"
        />
    </a>
);

const Header = () => (
    // with arrow fn. no need to return
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

// this is export by default
export default Header;
