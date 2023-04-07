import './Content.css';
export const PageIni = () => {
    return (
        <div className="post">
            <div className="post-title">
                <h3>Este é o titulo</h3>
            </div>
            <div className="post-foto">
                <img src="../assets/images/logo.png" />
            </div>
            <div className="post-notice">
                <img src="../assets/images/logo1.png" />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries
                </p>
            </div>
        </div>
    );
}