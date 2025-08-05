"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { isAuthenticated } from "../../../utils/auth";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import { fetchWithAuth } from "../../../utils/api";

export default function EditDoctorPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", speciality: "" });

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
      return;
    }

    fetchWithAuth(`/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchWithAuth(`/doctors/${id}`, {
      method: "PATCH",
      body: JSON.stringify(form),
    });
    router.push("/dashboard");
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="p-6 flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Doctor</h2>
            {["name", "email", "speciality"].map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field}
                className="w-full border p-2 mb-4 rounded"
                value={(form as any)[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              />
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 w-full rounded">
              Update
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
