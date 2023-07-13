import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { voirCalendrierPro } from '../../redux/slices/rdv';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListCalendarProgrammer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user =  useSelector((state) => state.userSlice);
  const rdvSlice = useSelector((state) => state.rdvSlice);


  const [data, setData] = useState({
    description: '',
    typeRdv: '',
    jourDebut: '',
    jourFin: '',
    heureDebut:'',
    heureFin:'',
    minuteDebut: '',
    minuteFin: '',
    dureeRdv: '',
    jourDisponible: '',
});



    const handleSeeProgramCalendar = () => {
        navigate(`/home`);
    }

    const handleDeleteCalendar = (cal) => {
        dispatch(handleDeleteCalendar(cal)).then(() => {
            dispatch(voirCalendrierPro()).then(()=> {
            }) 
          })
    }

    return (
      {}
        <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3>List de vos disponibilités</h3>
          <div className="card">
        <div className="card-body">
          <table style={{ borderSpacing: '10px', tableLayout: 'fixed' }}>
            <thead>
              <tr>
              <th>
                  <h6>Id</h6>
                </th>
                <th>
                  <h6>Type de Rendez-Vous</h6>
                </th>
                <th>
                  <h6>Duree par Rendez-Vous</h6>
                </th>
                <th>
                  <h6>Description</h6>
                </th>
             </tr>
            </thead>
            <tbody>
              {rdvSlice.calendarList.map((cal) => (
                <tr key={cal.rdvId}>
                  <td>{cal.profession}</td>
                  <td>{cal.dureeRendezVous}</td>
                  <td>{cal.description}</td>
                  <td>
                    <button onClick={() => handleDeleteCalendar(cal)}
                    className="btn btn-outline-succes">
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ListCalendarProgrammer


/* <th>
                  <h6>Jour Début</h6>
                </th>
                <th>
                  <h6>Jour Fin</h6>
                </th>
                <th>
                  <h6>Heure Début</h6>
                </th>
                <th>
                  <h6>Heure Fin</h6>
                </th>
                <th>
                  <h6>Minute Début</h6>
                </th>
                <th>
                  <h6>Minute Fin</h6>
                </th>
                                <th>
                  <h6>Jours Disponibles</h6>
                </th>
                */