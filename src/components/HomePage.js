import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../styles/HomePage.css';

function HomePage () {
  return (
    <div className="home"> 
      <h1>The Renaissance Sculpture Gallery</h1>
      <p>Explore the beauty of Renaissance sculptures and learn about their historical significance.</p>

      <h2>The Renaissance</h2>
      <p>The Renaissance, which means "rebirth" in French, marks a profound period of revival in arts,
        culture, and intellectual pursuit that began in Italy in the 14th century and spread across Europe. 
        This era is celebrated for its remarkable contributions to art, architecture, literature, philosophy, and science.</p>
      <p>Art during the Renaissance represented a cultural rebirth reflecting the values of ancient Greece and Rome.
        Artists of this period focused on humanism, the philosophy that emphasized the importance of human values rather than religious beliefs.
        This shift led to art that celebrated the beauty and potential of the individual and showed a greater attention to realism through the study of human anatomy and perspective</p>
      <p>Renaissance sculpture, in particular, stood out for its incredible dynamism and attention to human details that had not been seen since the glory days of classical antiquity. 
        Artists like Michelangelo, Donatello, and Bernini broke away from the rigid and hierarchical forms of medieval times to create sculptures that conveyed movement and emotion in a way that had never been done before.
        Their works are not just celebrations of human beauty and emotion but are also seen as benchmarks of technical prowess in the art of sculpting.</p>
      <p>From the David of Michelangelo to the Gates of Paradise by Ghiberti, Renaissance sculptures offer a window into the soul of an age that viewed art as the highest expression of human genius.</p>
      <div className="view-gallery">
        <Link to="/gallery" className="gallery-link">View the Gallery</Link>  {/* Link to the Gallery Page */}
      </div>
    </div>
  );
}

export default HomePage;
