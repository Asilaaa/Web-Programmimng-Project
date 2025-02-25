import React from "react";

const SignIn = () => {
    const [opacity, setOpacity] = React.useState(0.75);
    return (
        <div className="container mt-5" style={{
            height: "20rem",
            background: "linear-gradient(45deg, #D8B5FF, #3BADAE, #D8B5FF)",
            borderRadius: "20px",
            opacity: opacity,
            transition: "opacity 0.3s ease-in-out"
          }}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0.75)}>
            <h2 className="text-center mb-4" style={{
                color: "#B80F57",
                fontWeight: "bold",
                fontStyle: "italic",
                fontFamily: "URW Chancery L, cursive",
                }}>
                Sign In <span style={{ fontStyle: "normal" }}>🔑👤</span></h2>
            <form className="w-50 mx-auto">
                <div className="mb-3">
                    <label className="form-label" style={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontFamily: "URW Chancery L, cursive",
                        color: "#FFFFFF",
                    }}>Name:</label>
                    <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontFamily: "URW Chancery L, cursive",
                    }}>Email:</label>
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <button type="submit" className="btn btn-success w-100" style={{
                        backgroundColor: "#CD295A",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontFamily: "URW Chancery L, cursive"
                    }}>Register</button>
            </form>
        </div>
    );
};

export default SignIn;