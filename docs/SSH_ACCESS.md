# Setting Up SSH Access

This document provides instructions on how to set up SSH access for the project repository.

## Step 1: Generate SSH Key

If you don't already have an SSH key, you need to generate one. Open your terminal and run the following command:

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Follow the prompts to save the key to the default location (`~/.ssh/id_rsa`) and set a passphrase.

## Step 2: Add SSH Key to SSH Agent

Start the SSH agent in the background:

```sh
eval "$(ssh-agent -s)"
```

Add your SSH private key to the SSH agent:

```sh
ssh-add ~/.ssh/id_rsa
```

## Step 3: Add SSH Key to GitHub

Copy the SSH key to your clipboard:

```sh
cat ~/.ssh/id_rsa.pub
```

Go to GitHub and navigate to **Settings > SSH and GPG keys > New SSH key**. Paste your key in the "Key" field and give it a descriptive title.

## Step 4: Clone the Repository Using SSH

Now you can clone the repository using SSH:

```sh
git clone git@github.com:your_username/your_repository.git
```

Replace `your_username` and `your_repository` with your GitHub username and the repository name, respectively.

## Step 5: Verify SSH Access

To verify that your SSH key is set up correctly, run:

```sh
ssh -T git@github.com
```

You should see a message like:

```
Hi your_username! You've successfully authenticated, but GitHub does not provide shell access.
```

This confirms that your SSH key is working correctly.

## Additional Resources

- [GitHub SSH Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)