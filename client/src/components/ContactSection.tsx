import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSubmissionSchema, type InsertContactSubmission } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useLanguage } from '@/hooks/useLanguage';

export function ContactSection() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceInterest: '',
      projectDetails: '',
    },
  });

  const serviceInterest = watch('serviceInterest');

  const mutation = useMutation({
    mutationFn: (data: InsertContactSubmission) =>
      apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: t.contact.form.sent,
        description: "We'll get back to you soon.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: () => {
      toast({
        title: t.contact.form.error,
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  return (
    <section className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white fade-in">
            <h2 className={`text-4xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.contact.title}
            </h2>
            <p className={`text-xl text-blue-100 mb-8 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.contact.subtitle}
            </p>
            
            <div className="space-y-6">
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className={`h-6 w-6 text-gold ${isRTL ? 'ml-4' : 'mr-4'} mt-1`} />
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-semibold">{t.contact.mainOffice}</div>
                  <div className="text-blue-100 whitespace-pre-line">{t.contact.mainOfficeAddress}</div>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className={`h-6 w-6 text-gold ${isRTL ? 'ml-4' : 'mr-4'}`} />
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-semibold">{t.contact.regionalOffice}</div>
                  <div className="text-blue-100">{t.contact.regionalOfficeAddress}</div>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className={`h-6 w-6 text-gold ${isRTL ? 'ml-4' : 'mr-4'}`} />
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-semibold">{t.contact.contactLine}</div>
                  <div className="text-blue-100">{t.contact.phone}</div>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className={`h-6 w-6 text-gold ${isRTL ? 'ml-4' : 'mr-4'}`} />
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-100">{t.contact.email}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl fade-in">
            <h3 className={`text-2xl font-bold text-navy mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.contact.form.title}
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.contact.form.fullName}
                  </Label>
                  <Input
                    id="fullName"
                    {...register('fullName')}
                    placeholder={t.contact.form.fullName}
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && (
                    <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="company" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.contact.form.company}
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder={t.contact.form.company}
                    className={errors.company ? 'border-red-500' : ''}
                  />
                  {errors.company && (
                    <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {errors.company.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="your@email.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.contact.form.phone}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="+971 XX XXX XXXX"
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="serviceInterest" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.contact.form.serviceInterest}
                </Label>
                <Select value={serviceInterest} onValueChange={(value) => setValue('serviceInterest', value)}>
                  <SelectTrigger className={errors.serviceInterest ? 'border-red-500' : ''}>
                    <SelectValue placeholder={t.contact.form.serviceInterest} />
                  </SelectTrigger>
                  <SelectContent>
                    {t.contact.services.map((service, index) => (
                      <SelectItem key={index} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceInterest && (
                  <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {errors.serviceInterest.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="projectDetails" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.contact.form.projectDetails}
                </Label>
                <Textarea
                  id="projectDetails"
                  rows={4}
                  {...register('projectDetails')}
                  placeholder="Describe your security requirements..."
                  className={errors.projectDetails ? 'border-red-500' : ''}
                />
                {errors.projectDetails && (
                  <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-navy hover:bg-blue-800 text-white font-semibold"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <div className={`animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t.contact.form.submit}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
