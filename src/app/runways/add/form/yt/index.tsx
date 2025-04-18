"use client";
import { Clipboard } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AddYoutubeLink() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [thumbnail, setThumbnail] = useState("");

  const getYouTubeVideoId = (url: string): string | null => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (hostname.includes("youtube.com"))
        return parsedUrl.searchParams.get("v");
      if (hostname === "youtu.be") return parsedUrl.pathname.slice(1);

      return null;
    } catch (error) {
      return null;
    }
  };

  const handlePaste = async (onChange: (value: string) => void) => {
    try {
      const text = await navigator.clipboard.readText();
      const trimmed = text.trim();
      handleChange(trimmed, onChange);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleChange = (value: string, onChange: (value: string) => void) => {
    onChange(value);

    const videoId = getYouTubeVideoId(value);
    if (videoId) {
      setThumbnail(`https://img.youtube.com/vi/${videoId}/0.jpg`);
    } else {
      setThumbnail("");
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="w-full sm:w-6/12">
        <Label htmlFor="youtube">YouTube Link</Label>
        <p className="text-sm text-muted-foreground">Paste a YouTube link</p>

        <Controller
          name="youtubeLink"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <Input
                id="youtube"
                placeholder="https://youtube.com/..."
                value={field.value || ""}
                onChange={(e) => handleChange(e.target.value, field.onChange)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full cursor-pointer"
                onClick={() => handlePaste(field.onChange)}
                title="Paste from clipboard"
              >
                <Clipboard className="h-4 w-4" />
              </Button>
            </div>
          )}
        />
        {errors.youtubeLink && (
          <p className="text-sm text-red-500">
            {errors.youtubeLink.message as string}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="thumbnail">YouTube Thumbnail</Label>
        <div className="mt-1 border border-dashed rounded-md bg-slate-50 overflow-hidden h-48">
          {thumbnail ? (
            <img
              src={thumbnail || "/placeholder.svg"}
              alt="YouTube thumbnail"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              YouTube thumbnail will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddYoutubeLink;
