<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PasswordResetNotification extends Notification
{
    use Queueable;

    private $user;
    private $checkUserCodeExist;

    /**
     * Create a new notification instance.
     */
    public function __construct($user, $checkUserCodeExist)
    {
        $this->user = $user;
        $this->checkUserCodeExist = $checkUserCodeExist;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('Code modification du mot de passe')
                    ->line('Bonjour, '.$this->user->firstname)
                    ->line('Tu reçois cet e-mail parce que nous avons reçu une demande de réinitialisation du mot de passe de ton compte.')
                    ->line('Ton code de réinitialisation : '.$this->checkUserCodeExist->token)
                    ->line('Ton code a une validité de 10 minutes')
                    ->line('Si tu n\'as pas demandé la réinitialisation de ton mot de passe, aucune autre action n\'est requise.')
                    ->line('L\'equipe Jambon Beurre 😎');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
