function Navbar({ loggedIn, onLogout, onSignupToggle }) {
    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <span className="navbar-brand">Task Assesment</span>

            {!loggedIn ? (
                <button className="btn btn-outline-light"
                    onClick={onSignupToggle}>
                    Signup
                </button>
            ) : (
                <button className="btn btn-danger"
                    onClick={onLogout}>
                    Logout
                </button>
            )}
        </nav>
    );
}

export default Navbar;
