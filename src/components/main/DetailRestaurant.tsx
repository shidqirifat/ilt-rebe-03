import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label as LabelForm } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CustomerReview } from "@/types/restaurant";
import { CONFIG } from "@/configs/data";
import useReview from "@/hooks/useReview";

export const Label = ({ children }: { children: string }) => {
  return <h4 className="text-base text-slate-800 font-medium">{children}</h4>;
};

export const ImageRestaurant = ({ pirctureId }: { pirctureId: string }) => {
  return (
    <img
      src={`${CONFIG.BASE_URL_IMAGE}/${pirctureId}`}
      alt="Restaurant"
      className="w-full h-96 object-cover my-4 rounded-xl"
    />
  );
};

export const BackToHome = () => {
  return (
    <Button variant="ghost" className="px-3 text-slate-800" asChild>
      <Link to="/">
        <ArrowLeft width={20} height={20} className="mr-2" /> Back
      </Link>
    </Button>
  );
};

export const Category = ({ children }: { children: string }) => {
  return (
    <div className="py-1 px-5 bg-sky-500 rounded-full">
      <h4 className="text-white text-sm leading-5 font-normal">{children}</h4>
    </div>
  );
};

export const Review = ({ name, review, date }: CustomerReview) => {
  return (
    <div className="p-3 rounded-md border border-slate-200 shadow space-y-2 bg-white">
      <h3 className="text-slate-700 font-medium text-base leading-4">
        🧑‍🦰 {name}
      </h3>
      <p className="text-slate-800 font-normal text-sm leading-4">
        📝 {review}
      </p>
      <h4 className="text-slate-600 font-normal text-sm leading-4">
        📅 {date}
      </h4>
    </div>
  );
};

export const PostReview = () => {
  const {
    name,
    review,
    openModal,
    isPending,
    toggleModal,
    setName,
    setReview,
    handleSubmitReview,
  } = useReview();

  return (
    <Dialog open={openModal} onOpenChange={toggleModal}>
      <DialogTrigger>
        <Button variant="secondary" className="h-full w-full rounded-md">
          <div className="flex flex-col justify-center items-center gap-1">
            <Plus />
            <h3>Add Review</h3>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Review</DialogTitle>
          <div className="!mt-4">
            <form className="space-y-2" onSubmit={handleSubmitReview}>
              <div className="space-y-1 text-left">
                <LabelForm htmlFor="name">Name</LabelForm>
                <Input
                  id="name"
                  placeholder="Insert your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="space-y-1 !mb-2 text-left">
                <LabelForm htmlFor="review">Review</LabelForm>
                <Textarea
                  id="review"
                  placeholder="Insert your review"
                  required
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                />
              </div>

              <Button disabled={isPending} className="w-full">
                Post Review
              </Button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
