import './ProgressBar.css'

function ProgressBar(props) {
    
    return (
        <div className="ContainerBar mt-4 mb-4">
            <div className="statusbar" style={props.style}></div>
        </div>
    )
}

export default ProgressBar