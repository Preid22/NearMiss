import './Object.css'

function Object({ name, key, magnitude, isDangerous }) {

  return (
    <div className="object">
        <div>Name:{name}</div>
        <div>Magnitude: {magnitude}</div>
        <div>Dangerous: {isDangerous}</div>
    </div>
  );
}

export default Object
