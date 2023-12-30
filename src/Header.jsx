import './Header.css'
const Headcomponent = () => {
return <>
<div class="header">
        <div class="container">
            <div class="row">
            <div class="logo-flex col-md-6 justify-content-start align-items-center">
                <h1>
                    <img src="./assets/img/Git-Logo-White.png" />
                </h1>
            </div>
            <div class="d-flex col-md-6 justify-content-end align-items-center">
            <button class="register">Login</button>
            </div>
            </div>
        </div>
</div>
</>
}

export default Headcomponent