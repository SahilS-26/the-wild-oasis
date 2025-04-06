import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: (newSettings) => updateSettingApi(newSettings),
    onSuccess: () => {
      toast.success("Cabin is successfully Edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
  });

  return { isUpdating, updateSettings };
};
