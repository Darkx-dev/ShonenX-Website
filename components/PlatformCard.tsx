import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, Loader2 } from "lucide-react";
import SpotlightCard from "./blocks/Components/SpotlightCard/SpotlightCard";
import { ReactNode } from "react";

export function PlatformCard({
  name,
  icon,
  description,
  requirements,
  status,
  isDownloading,
  onDownload,
}: {
  name: string;
  icon: ReactNode;
  description: string;
  requirements: string;
  status: "available" | "coming_soon";
  isDownloading: boolean;
  onDownload: VoidFunction;
}) {
  const isAvailable = status === "available";
  const isDiscord = name === "Discord";

  return (
    <SpotlightCard className="h-full">
      {/* Status Badge */}
      <Badge
        className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full
                  ${isAvailable 
                    ? isDiscord
                      ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                      : "bg-green-500/20 text-green-300 border-green-500/30" 
                    : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                  }`}
      >
        {isAvailable ? "Available" : "Coming Soon"}
      </Badge>

      {/* Icon and Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 
                     flex items-center justify-center border border-primary/30">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>

      {/* Description */}
      <div className="bg-gray-800/50 rounded-lg p-3 mb-3">
        <p className="text-white/80 text-sm">{description}</p>
      </div>

      {/* Requirements */}
      <p className="text-white/70 text-xs mb-6">{requirements}</p>

      {/* Action Button */}
      <Button
        className={`w-full h-11 rounded-lg font-medium transition-all duration-300
                  ${isAvailable
                    ? isDiscord
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                      : "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                    : "bg-gray-800 text-white/40 cursor-not-allowed border border-gray-700/50"
                  }`}
        disabled={!isAvailable || isDownloading}
        onClick={() => isAvailable && onDownload()}
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Downloading...
          </>
        ) : (
          <>
            {isAvailable ? (
              <Download className="w-5 h-5 mr-2" />
            ) : (
              <Calendar className="w-5 h-5 mr-2" />
            )}
            {isAvailable
              ? isDiscord
                ? "Join Community"
                : "Download Now"
              : "In Development"}
          </>
        )}
      </Button>
    </SpotlightCard>
  );
}

// Example usage:
/*
<PlatformCard 
  name="Android"
  icon={<AndroidIcon className="h-6 w-6" />}
  description="APK File"
  requirements="Android 6.0+ • 2GB RAM"
  status="available"
  isDownloading={downloading === "android"}
  onDownload={() => handleDownload("android")}
/>
*/