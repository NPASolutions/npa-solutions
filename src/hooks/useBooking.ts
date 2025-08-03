import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface BookingData {
  serviceName: string;
  servicePrice: string;
}

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const createBooking = async (bookingData: BookingData) => {
    if (!user) {
      throw new Error('User must be authenticated to create a booking');
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          user_id: user.id,
          service_name: bookingData.serviceName,
          service_price: bookingData.servicePrice,
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Booking Created",
        description: "Your booking has been created successfully. We'll contact you soon.",
      });

      return data;
    } catch (error: any) {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createBooking,
    loading
  };
};