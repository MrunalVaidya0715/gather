"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FileUpload } from "@/components/FileUpload";
import axios from 'axios'
import { useRouter } from "next/navigation";
const ServerModal = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const formSchema = z.object({
    name: z.string().min(1, { message: "Please provide Server Name." }),
    imageUrl: z.string().min(1, { message: "Please provide Server Image." }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post('/api/servers', values)
      form.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-500 text-white hover:bg-indigo-500/90">
          {/* <Button variant="primary">Create a Server</Button> */}
          Create a Server
        </DialogTrigger>
        <DialogContent className=" w-[90%] max-w-[450px] rounded-lg overflow-y-auto">
          <DialogHeader className="">
            <DialogDescription className=" text-center">
              Give the server a name and an image
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form className="mt-5" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="">
                <div className="flex items-center justify-center">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FileUpload
                            endpoint="serverImage"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-500 dark:text-zinc-200">
                        Server name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300 dark:bg-secondary border-0 text-black dark:text-zinc-200 focus-visible:ring-0  focus-visible:ring-offset-2"
                          placeholder="Enter Server Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className=" mt-10">
                <Button
                  variant="primary"
                  className=" text-black dark:text-white"
                  disabled={isLoading}
                >
                  Create
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServerModal;
