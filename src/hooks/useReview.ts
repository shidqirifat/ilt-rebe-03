import { postReview } from "@/services/restaurant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

export default function useReview() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["detail-restaurant", id] });
      setOpenModal(false);
    },
  });

  const handleSubmitReview = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ id: id as string, name, review });
  };

  const toggleModal = () => {
    if (isPending) return;

    setOpenModal((prev) => !prev);
    setName("");
    setReview("");
  };

  return {
    isPending,
    name,
    review,
    openModal,
    setName,
    setReview,
    toggleModal,
    handleSubmitReview,
  };
}
