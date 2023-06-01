import Background from './components/Background/Background';
import SocialPart from './components/SocialPart/SocialPart';
import { imagePath } from './constant/imagePath';

function App() {
    return (
        <div className="App">
            <Background />
            <div
                className="center_vertical"
                style={{ position: 'relative', color: 'white', maxWidth: '1200px', margin: '0 auto', padding: '30px', textAlign: 'center' }}
            >
                <img src={imagePath.LOGO_FULL_HORIZONTAL} alt="" style={{ maxWidth: '500px', width: '100%' }} />
                <div style={{ textTransform: 'uppercase', fontWeight: '500', letterSpacing: '2px', fontSize: '30px', marginTop: '30px' }}>
                    We will be back soon!
                </div>
                <div className="divisor"></div>
                <div style={{ marginBottom: '30px' }}>We're upgrading to give you the best experience!</div>
                <SocialPart />
            </div>
        </div>
    );
}

export default App;
