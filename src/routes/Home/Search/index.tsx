import { Outlet } from "react-router-dom";
import CardFindGithub from "../../../components/CardFindGithub";

export default function Search() {
  return (
    <>
        <main className="mt-54">
            <section className="container">
                <CardFindGithub />
                <Outlet />
            </section>
        </main>
    </>
  );
}