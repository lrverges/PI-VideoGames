import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../store/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./createVideogame.css";

export default function CreateVideogame() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const url = "http://localhost:3001";
  const [videogame, setVideogame] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    image_background: "",
    platforms: [],
    genres: [],
  });
  const [errors, setErrors] = useState({
    name: "Name is required",
    description: "Description is required",
    platforms: "Please select at least one platform",
  });

  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    axios.get(`${url}/platforms`).then((response) => {
      setPlatforms(response.data);
    });
    dispatch(getGenres());
  }, [dispatch, setPlatforms]);

  function onInputChange(e) {
    e.preventDefault();
    setVideogame({
      ...videogame,
      [e.target.name]: e.target.value,
    });

    setErrors(validate({ ...videogame, [e.target.name]: e.target.value }));
  }

  function onChecked(e) {
    if (e.target.checked) {
      setVideogame({
        ...videogame,
        [e.target.name]: [...videogame[e.target.name], e.target.value],
      });
    } else {
      setVideogame({
        ...videogame,
        [e.target.name]: videogame[e.target.name].filter(
          (elem) => e.target.value !== elem
        ),
      });
    }
    console.log(videogame.genres);
  }

  function validate(input) {
    let errors = {};
    if (input.name.length === 0) errors.name = "Name is requerid";
    else if (!/[a-z\d\-_\s]+$/i.test(input.name)) {
      errors.name = "Name is invalid";
    } //[a-z] cualquier letra \d cualquier numero \- se permite - y _
    // \s espacios en blanco
    if (input.description.length === 0)
      errors.description = "Description is requerid";
    else if (!/[a-z\d+&+?+¿\-_\s]+$/i.test(input.description)) {
      errors.description = "there are characters not allowed";
    }
    let released = new Date(input.released);
    let hoy = new Date();
    if (released > hoy) errors.released = "invalid date: must be less";
    if (released < new Date("1947-01-25"))
      errors.released =
        "invalid date: It can t be earlier than the first video game in history";
    if (parseFloat(input.rating) < 0 || parseFloat(input.rating) > 5)
      errors.rating = "enter a number between 0 and 5";
    //  /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
    const reg_exUrl =
      /(http|https|ftp|ftps)+:\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
    const reg_exImg = /.*(png|jpg|jpeg|gif)$/;
    if (
      input.image_background.length > 0 &&
      !reg_exUrl.test(input.image_background)
    )
      errors.image_background = "not a valid url";
    else if (!reg_exImg.test(input.image_background))
      errors.image_background = "not a valid image";
    if (input.platforms.length === 0)
      errors.platforms = "Please select at least one platform";

    return errors;
  }
  function onSubmit(e) {
    e.preventDefault();
    
    try {
      axios.post(`${url}/videogame`, videogame);
      alert("has been created successfully");
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <form onSubmit={onSubmit} className="main">
      <header>
        <h2>Create Videogame</h2>
        <div>Complete this form</div>
      </header>
      <section className="section_row">
        <div className="input_group">
          <input
            type="text"
            id="name"
            name="name"
            className="input_create"
            required
            onChange={onInputChange}
            value={videogame.name}
          />
          <label htmlFor="name" className="input_label">
            Name
          </label>
          <p className={errors.name && "invalid"}>{errors.name}</p>
        </div>
        <div className="input_group">
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            min="0"
            max="5.0"
            className="input_create"
            onChange={onInputChange}
            required
            value={videogame.rating}
          />
          <label htmlFor="rating" className="input_label">
            Rating
          </label>
          <p className={errors.rating && "invalid"}>{errors.rating}</p>
        </div>
        <div className="input_group">
          <input
            id="released"
            name="released"
            type="date"
            className="input_create color_released"
            onChange={onInputChange}
            required
            value={videogame.released}
          />
          <label htmlFor="released" className="input_label">
            {" "}
            Released{" "}
          </label>
        </div>
        <p className={errors.released && "invalid"}>{errors.released}</p>
      </section>

      <div className="input_group">
        <input
          type="text"
          id="image_background"
          name="image_background"
          className="input_create"
          onChange={onInputChange}
          value={videogame.image_background}
          required
        />
        <label htmlFor="image_background" className="input_label">
          image URL
        </label>
        <p className={errors.image_background && "invalid"}>
          {errors.image_background}
        </p>
      </div>
      <div className="input_group">
        <textarea
          id="description"
          name="description"
          className="input_create"
          rows="10"
          cols="72"
          onChange={onInputChange}
          value={videogame.description}
          required
        />
        <label htmlFor="description" className="input_label">
          {" "}
          Description{" "}
        </label>
        <p className={errors.description && "invalid"}>{errors.description}</p>
      </div>
      <br />

      <fieldset>
        <legend>Genres</legend>

        {genres.length > 0 ? (
          genres.map((genre, i) => {
            return (
              <div key={i}>
                <label key={i}>
                  <input
                    key={i}
                    type="checkbox"
                    name="genres"
                    value={genre.name}
                    onChange={onChecked}
                  />{" "}
                  {genre.name}
                </label>
                <br />
              </div>
            );
          })
        ) : (
          <div>Cargando</div>
        )}
        <p className={errors.genres && "invalid"}>{errors.genres}</p>
      </fieldset>
      <fieldset>
        <legend>Platforms</legend>
        {platforms.length > 0 ? (
          platforms.map((platform, i) => {
            return (
              <div key={i}>
                <label key={i}>
                  <input
                    key={i}
                    type="checkbox"
                    name="platforms"
                    onChange={onChecked}
                    value={platform}
                  />
                  {platform}
                  <br />
                </label>
              </div>
            );
          })
        ) : (
          <div>Cargando</div>
        )}
        <p className={errors.platforms && "invalid"}>{errors.platforms}</p>
      </fieldset>
      <input type="submit" value="submit" />
      <input type="button" value="cancel" />
    </form>
  );
}
