import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteRole } from '../../../redux/slices/user';
import { useDispatch } from 'react-redux';

function SupprimerRole() {
  const [data, setData] = useState({
    utilisateur:'',
    role:'',
  });
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleDeleteRole = async () => {
    try {
      const dto = {
        role: `${data.role}`,
        userParam: `${data.utilisateur}`
      }

      await dispatch(deleteRole(dto)).unwrap();
      navigate(`/infoModifier`);
    }
    catch (error) {
      console.error(error);
      navigate(`/notAuthorized`);
    }
  }



  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center"> Supprimer un role à un Utilisateur :</h3>
          <h6 className="text-center"> Veuilliez choisir le role ainsi que l'utilisateur de votre choix.</h6>
          <div>
            <table className="table table-light">
              <tbody>
                <tr>
                  <td>Utilisateur</td>
                  <td><input
                    value={data.utilisateur}
                    className="form-control"
                    onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
                  ></input></td>
                </tr>
                <tr>
                  <td>Role</td>
                  < td><input
                    value={data.role}
                    className="form-control"
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                  ></input></td>
                </tr>
              </tbody>
            </table>
            <h6 className="text-center">
               <button onClick={handleDeleteRole} className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> Soumettre
          </button>
          </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupprimerRole