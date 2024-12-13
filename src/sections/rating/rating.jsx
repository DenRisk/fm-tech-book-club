import './rating.css';
import Container from '../../components/container/container.jsx';
import Icon from '../../components/icon/icon.jsx'


function Rating() {
    return (
        <section className="rating">
            <Container>
                <div className="rating__content">
                    <div className="rating__stars">
                        <Icon id='star' pointer={false}/>
                        <Icon id='star' pointer={false}/>
                        <Icon id='star' pointer={false}/>
                        <Icon id='star' pointer={false}/>
                        <Icon id='star' pointer={false}/>
                    </div>
                    <h3 className='text-3 rating__quotation'>
                        {'"'}{"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"}{'"'}
                    </h3>
                    <p className='text-5-regular'>Sarah Chen, Software Architect</p>
                </div>
            </Container>
        </section>
    );
}

export default Rating;
