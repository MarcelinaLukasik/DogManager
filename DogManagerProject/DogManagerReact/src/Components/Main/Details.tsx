import '../../styles/main/layout.css';

const Details: React.FC = () => {
    return (
        <div className='content'>
            <div className='panel'>
                <h2>Your pet info:</h2>
                <div className='row'>
                    <div className='col-5'>
                        <p>Name:</p>
                        <p>Age:</p>
                    </div>
                    <div className='col-5'>
                        <p>Gender:</p>
                        <p>Weight:</p>
                    </div>
                </div>
                <button>Done!</button>
            </div>       
        </div>
    );
};

export default Details;