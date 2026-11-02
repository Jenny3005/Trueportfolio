
import json

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.mail import EmailMessage

from .models import Client


@csrf_exempt
@require_POST
def contact(request):
    try:
        # Récupération des données envoyées par React
        data = json.loads(request.body)

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()

        # Vérification des champs obligatoires
        if not name or not email or not message:
            return JsonResponse({
                'success': False,
                'message': 'Tous les champs sont obligatoires.'
            }, status=400)

        # Vérification du format de l'adresse email
        from django.core.validators import validate_email
        from django.core.exceptions import ValidationError

        try:
            validate_email(email)
        except ValidationError:
            return JsonResponse({
                'success': False,
                'message': 'Adresse email invalide.'
            }, status=400)

        # Enregistrement dans la base de données
        client = Client.objects.create(
            name=name,
            email=email,
            message=message
        )

        # Préparation de l'email de notification
        email_message = EmailMessage(
            subject=f'Nouveau message de {name}',
            body=f"""
Bonjour,

Vous avez reçu un nouveau message depuis votre portfolio.

Nom : {name}
Adresse email : {email}

Message :
{message}

Cordialement,
Votre portfolio.
            """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.CONTACT_EMAIL],
            reply_to=[email],
        )

        # Envoi de l'email
        email_message.send(fail_silently=False)

        # Réponse envoyée à React
        return JsonResponse({
            'success': True,
            'message': 'Votre message a été envoyé avec succès.',
            'id': client.id
        }, status=201)

    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Les données envoyées sont invalides.'
        }, status=400)

    except Exception as e:
        print("ERREUR CONTACT :", str(e))

        return JsonResponse({
            'success': False,
            'message': "Une erreur est survenue lors de l'envoi du message."
        }, status=500)
