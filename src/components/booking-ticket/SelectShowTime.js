import { apiGetAllFilms } from '../../service/FilmService';
import './index.css';
import React, {useEffect, useState} from "react";
import { apiGetShowTimesByDate, apiGetShowTimesByFilm } from '../../service/ShowTimeService';
import {useNavigate} from "react-router";

const SelectShowTime = (props) => {
    const {onFinish} = props;
    const [allFilms, setAllFilms] = useState([]);
    const [allDates, setAllDates] = useState([]);
    const [showTimesFilters, setShowTimesFilters] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState();
    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedTime, setSelectedTime] = useState();
    const username=localStorage.getItem("username")
    const navigate = useNavigate();

    const fetchListFilm = async () => {
        const data = await apiGetAllFilms();
        console.log(data)
        setAllFilms(data);
        setAllDates([])
    };

    const onSelectFilm = (film) => {
        setSelectedFilm(film);
        fetchShowTimesByFilm(film.idFilm)
    };
    const fetchShowTimesByFilm = async (id) => {
        const res = await apiGetShowTimesByFilm(id);
        const datesByFilm =  [...new Set(res.map(item => item.showDate))];
        setAllDates(datesByFilm)
    }
    const onSelectDate = (date) => {
        setSelectedDate(date);
    };

    const fetchShowTimeByDate = async () => {
        const showTimeByDate = await apiGetShowTimesByDate(selectedFilm.idFilm, selectedDate);
        setShowTimesFilters(showTimeByDate);
    }
    const onSelectTime = (showTime) => {
        setSelectedTime(showTime);
    };
    const handleCLickSetTicket = () => {
        // if(username == null){
        //     navigate("/login")
        // }
        onFinish(selectedFilm, selectedTime);
    }
    useEffect(() => {
        fetchListFilm();
    }, []);

    useEffect(() => {
       setSelectedDate(0)
    }, [selectedFilm]);

    useEffect(() => {
        if (selectedDate) {
            fetchShowTimeByDate()
        } else {
            setShowTimesFilters([])
        }
    }, [selectedDate]);
    return (
        <div className="container-lg">
            <div className="select-film-wrapper">
                <h3 className="title">Đặt vé</h3>
                <div className="row">
                    <div className="col-12 col-md-4 select-card">
                        <div className="content">
                            <div className="title">CHỌN PHIM</div>
                            <div className="option-items" id="films-combox">
                                {allFilms.map(it =>
                                    <div
                                        key={it.idFilm}
                                        className={`item ${selectedFilm?.idFilm === it.idFilm ? 'selected' : ''}`}
                                        onClick={() => onSelectFilm(it)}
                                    >
                                        {it.nameFilm}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 select-card">
                        <div className="content">
                            <div className="title">CHỌN NGÀY CHIẾU</div>
                            <div className="option-items" id="dates-combox">
                                {allDates.map(it =>
                                    <div
                                        key={it}
                                        className={`item ${selectedDate === it ? 'selected' : ''}`}
                                        onClick={() => onSelectDate(it)}
                                    >
                                        {it}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 select-card">
                        <div className="content">
                            <div className="title">CHỌN SUẤT CHIẾU</div>
                            <div className="option-items" id="times-combox">
                                {selectedFilm && selectedDate ? (
                                    (showTimesFilters.length > 0)
                                        ? showTimesFilters.map(it =>
                                            <div
                                                key={it.idShowTime}
                                                className={`time-item ${selectedTime?.idShowTime === it.idShowTime ? 'selected' : ''}`}
                                                onClick={() => onSelectTime(it)}
                                            >
                                                {it.showTime}
                                            </div>
                                        )
                                        : <div className="no-times">Không có suất chiếu</div>
                                ) : ""
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button disabled={!selectedTime}
                    onClick={handleCLickSetTicket}
                    className=" d-flex m-auto mt-4 mb-4 btn btn-primary">
                Đặt vé
            </button>
        </div>
    );
};
export default SelectShowTime;