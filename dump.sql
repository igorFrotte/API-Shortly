--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token text NOT NULL,
    "createAt" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createAt" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createAt" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjAwNjc4MSwiZXhwIjoxNjY2MDEzOTgxfQ.1IuDwEdsmX-9cLnrz3SxaRAo9uwhD_cMOiD6MKDWbS0', '2022-10-17 08:39:41.316147-03');
INSERT INTO public.sessions VALUES (2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjAwNjg2NywiZXhwIjoxNjY2MDE0MDY3fQ.J1jqJTacyU0WLOMvrOzWPSbsQ3Tx4wCz99LhI6PbZ0U', '2022-10-17 08:41:07.363684-03');
INSERT INTO public.sessions VALUES (3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjAyMDc3MywiZXhwIjoxNjY2MDI3OTczfQ.44f1N9Mg5_5gdPxcbPJGW7YRXN25lXGk2ojS35H7nHg', '2022-10-17 12:32:53.628601-03');
INSERT INTO public.sessions VALUES (4, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2NjAyMzA4MCwiZXhwIjoxNjY2MDMwMjgwfQ.EM23jGxHmie9nXPUWJV4flxOgfYP6Zwdq6Wa0-QCrIg', '2022-10-17 13:11:20.956021-03');
INSERT INTO public.sessions VALUES (5, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2NjAyNDE0OCwiZXhwIjoxNjY2MDMxMzQ4fQ.ldZFyHQ8RHC0nxDeHfwXvktkF0k--XnPtfufR2vDD-M', '2022-10-17 13:29:08.40207-03');
INSERT INTO public.sessions VALUES (6, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2NjAyNDI3NCwiZXhwIjoxNjY2MDM4Njc0fQ.j9YUSsDyz8cwR22Rq6wqq68asxiPC4CxNSzoVf3lrUc', '2022-10-17 13:31:14.516697-03');
INSERT INTO public.sessions VALUES (7, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NjAyNDM1NywiZXhwIjoxNjY2MDM4NzU3fQ.dw1vAsBaIBe1HI30ayJb-JOOYeqPcBfGCMlQzzF1dr0', '2022-10-17 13:32:37.153391-03');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (3, 1, 'http://oieee.com', '4Nuw2YS0il4dFxqAuwBBq', 2, '2022-10-17 09:28:16.503945-03');
INSERT INTO public.urls VALUES (5, 2, 'http://driven.com.br', 'whGfVBN9i2SsmIAl5gxbQ', 3, '2022-10-17 13:14:29.599831-03');
INSERT INTO public.urls VALUES (4, 2, 'https://google.com', '-dAwxZooNwibPPFMJ3bWe', 1, '2022-10-17 13:14:06.909991-03');
INSERT INTO public.urls VALUES (2, 1, 'http://oi.com', '9wozS36V_OmQqNLHAkGxA', 1, '2022-10-17 09:24:24.144005-03');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$12$xIvNcPHHD7IcOuvzGxFPq.qA/exuAnyWRVJi/Fg/Lx4E7J8FZdLL.', '2022-10-17 08:10:04.503611-03');
INSERT INTO public.users VALUES (2, 'igor', 'igor@oi.com', '$2b$12$I3wMgJF4d6Cthu6LUOJJCejGBTgsOq1OhzUaaVn51hA8NTlhPIrTK', '2022-10-17 13:09:56.545271-03');
INSERT INTO public.users VALUES (3, 'marcio', 'marcio@driven.com', '$2b$12$ncj852D0G.VFutFpHll.j.Tvg9zvADeI3WM7c8upOsxn6uEO1JxcC', '2022-10-17 13:10:30.090745-03');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

