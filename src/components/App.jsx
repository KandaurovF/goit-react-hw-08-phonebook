import { Suspense, lazy, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRoutes,
} from 'constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOutUser,
  refreshUser,
  selectUserAuthentication,
  selectUserData,
} from 'redux/authReducer';
import Loader from './Loader';
import css from './App.module.css';

const NotFoundPage = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const activeLink = ({ isActive }) => (isActive ? css.active : css.NavLink);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={activeLink} to={HOME_ROUTE}>
            Home
          </NavLink>

          {authenticated ? (
            <>
              <NavLink className={activeLink} to={CONTACTS_ROUTE}>
                Phonebook
              </NavLink>
              <span>Hello, {userData.name}</span>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <NavLink className={activeLink} to={LOGIN_ROUTE}>
                Login
              </NavLink>
              <NavLink className={activeLink} to={REGISTER_ROUTE}>
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
