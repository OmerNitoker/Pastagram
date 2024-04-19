
export function MoreMenu({ toggleMoreMenu, onLogoutClicked }) {
    return (
        <div className="menu-modal-wrapper" onClick={toggleMoreMenu}>
            <div className="menu-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="logout-btn clean-btn" onClick={onLogoutClicked}>Log out</button>
            </div>
        </div>
    )
}